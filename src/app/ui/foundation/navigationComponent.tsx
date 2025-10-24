"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./navigationComponent.module.css";

export default function NavigationComponent(): ReactNode {
    const [open, setOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                setSolutionsOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setSolutionsOpen(false);
            }
        };

        if (solutionsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [solutionsOpen]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <nav className={style.navigationBlock}>
            <div className={style.navigationSubcontainer}>
                <Link href="/">
                    <Image
                        className={style.menuLogo}
                        src="/assets/images/logo.webp"
                        alt="Aymeric Pxiel - Développeur Web & Mobile : logo d'entreprise"
                        width={75}
                        height={75}
                    />
                </Link>
            </div>

            <div className={`${style.navigationSubcontainer} ${style.desktopOnly}`}>
                <ul className={style.mainNavigationContainer}>
                    <li>
                        <Link href="/" className={style.menuLink}>Accueil</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={style.menuLink}>Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/process" className={style.menuLink}>Processus</Link>
                    </li>
                    <li className={style.menuDropdown} ref={dropdownRef}>
                        <button 
                            className={style.menuLink}
                            onClick={() => setSolutionsOpen(!solutionsOpen)}
                            aria-expanded={solutionsOpen}
                            aria-haspopup="true"
                        >
                            Mes solutions
                            <i className={`fi fi-rr-angle-small-down ${style.dropdownIcon}`}></i>
                        </button>
                        <ul className={`${style.dropdownMenu} ${solutionsOpen ? style.open : ""}`}>
                            <li>
                                <Link 
                                    href="/solutions/echo" 
                                    className={style.dropdownLink}
                                    onClick={() => setSolutionsOpen(false)}
                                >
                                    ✨ Echo - Site vitrine 72h
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact" className={style.menuLink}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className={style.navigationSubcontainer}>
                <Link href="/contact" className={`${style.menuCta} ${style.desktopOnly}`}>Demander un devis</Link>

                <button
                    type="button"
                    className={`${style.burgerButton} ${style.mobileOnly}`}
                    aria-label="Ouvrir le menu"
                    aria-expanded={open}
                    aria-controls="mobileMenu"
                    data-open={open ? "true" : "false"}
                    onClick={() => setOpen(v => !v)}
                >
                    <i className={'fi fi-br-menu-burger'}></i>
                </button>
            </div>

            <div
                className={`${style.backdrop} ${open ? style.open : ""}`}
                onClick={() => setOpen(false)}
            />
            <div
                id="mobileMenu"
                className={`${style.mobileMenu} ${open ? style.open : ""}`}
            >
                <ul className={style.mobileNavList}>
                    <li>
                        <Link href="/" className={style.mobileNavLink} onClick={() => setOpen(false)}>Accueil</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={style.mobileNavLink} onClick={() => setOpen(false)}>Réalisations</Link>
                    </li>
                    <li>
                        <Link href="/process" className={style.mobileNavLink} onClick={() => setOpen(false)}>Processus</Link>
                    </li>
                    <li className={style.mobileMenuDropdown}>
                        <button 
                            className={style.mobileNavLink}
                            onClick={() => setSolutionsOpen(!solutionsOpen)}
                            aria-expanded={solutionsOpen}
                            aria-haspopup="true"
                        >
                            Mes solutions
                            <i className={`fi fi-rr-angle-small-down ${style.mobileDropdownIcon}`}></i>
                        </button>
                        <ul className={`${style.mobileDropdownMenu} ${solutionsOpen ? style.open : ""}`}>
                            <li>
                                <Link 
                                    href="/solutions/echo" 
                                    className={style.mobileDropdownLink} 
                                    onClick={() => {
                                        setOpen(false);
                                        setSolutionsOpen(false);
                                    }}
                                >
                                    ✨ Echo - Site vitrine 72h
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact" className={style.mobileNavLink} onClick={() => setOpen(false)}>Contact</Link>
                    </li>
                </ul>
                <Link href="/contact" className={style.menuCta} onClick={() => setOpen(false)}>
                    Demander un devis
                </Link>
            </div>
        </nav>
    );
}