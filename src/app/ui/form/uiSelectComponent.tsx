"use client";

import React, {useEffect, useId, useMemo, useRef, useState} from "react";
import styles from "./uiSelectComponent.module.css";

type SelectOption = { value: string; label: string };

type UiSelectComponentProps = {
	id?: string;
	name: string;
	options: SelectOption[];
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	menuClassName?: string;
};

function cn(...a: (string | undefined | false)[]) { return a.filter(Boolean).join(" "); }

function useOutsideClick<T extends HTMLElement>(
	ref: React.RefObject<T | null> | React.MutableRefObject<T | null>,
	cb: () => void
) {
	useEffect(() => {
		const handler = (e: MouseEvent | PointerEvent | TouchEvent) => {
			const el = ref.current;
			if (!el) return;
			if (!el.contains(e.target as Node)) cb();
		};
		document.addEventListener("pointerdown", handler);
		return () => document.removeEventListener("pointerdown", handler);
	}, [ref, cb]);
}

export default function UiSelectComponent({
	                                          id,
	                                          name,
	                                          options,
	                                          placeholder = "Sélectionner...",
	                                          value,
	                                          defaultValue,
	                                          onChange,
	                                          disabled,
	                                          required,
	                                          className,
	                                          menuClassName,
                                          }: UiSelectComponentProps) {
	const autoId = useId();
	const triggerId = id ?? `select-${autoId}`;
	const listboxId = `listbox-${autoId}`;
	const containerRef = useRef<HTMLDivElement | null>(null);
	const buttonRef   = useRef<HTMLButtonElement | null>(null);
	const listRef     = useRef<HTMLUListElement | null>(null);
	const [open, setOpen] = useState(false);
	const [internal, setInternal] = useState<string | undefined>(value ?? defaultValue);
	const [highlight, setHighlight] = useState<number>(-1);

	useEffect(() => setInternal(value), [value]);

	const selectedIndex = useMemo(() => options.findIndex(o => o.value === (value ?? internal)), [options, value, internal]);
	const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

	useEffect(() => {
		if (!open) return;
		const i = selectedIndex >= 0 ? selectedIndex : 0;
		setHighlight(i);
		queueMicrotask(() => listRef.current?.focus());
	}, [open, selectedIndex]);

	useOutsideClick(containerRef, () => setOpen(false));

	useEffect(() => {
		if (!open) return;
		const el = document.getElementById(`${listboxId}-opt-${highlight}`);
		el?.scrollIntoView({ block: "nearest" });
	}, [open, highlight, listboxId]);

	const commit = (v: string) => {
		setInternal(v);
		onChange?.(v);
		setOpen(false);
		buttonRef.current?.focus();
	};

	const onKeyDownTrigger = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (disabled) return;
		if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			setOpen(true);
		}
	};

	const onKeyDownList = (e: React.KeyboardEvent<HTMLUListElement>) => {
		if (e.key === "Escape") {
			e.preventDefault();
			setOpen(false);
			buttonRef.current?.focus();
			return;
		}
		if (e.key === "Enter") {
			e.preventDefault();
			const i = highlight >= 0 ? highlight : 0;
			const v = options[i]?.value;
			if (v != null) commit(v);
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			const next = highlight < options.length - 1 ? highlight + 1 : 0;
			setHighlight(next);
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			const prev = highlight > 0 ? highlight - 1 : options.length - 1;
			setHighlight(prev);
			return;
		}
		if (e.key === "Home") {
			e.preventDefault();
			setHighlight(0);
			return;
		}
		if (e.key === "End") {
			e.preventDefault();
			setHighlight(options.length - 1);
			return;
		}
	};

	return (
		<div ref={containerRef} className={cn(styles.container, className)}>
			<input type="hidden" name={name} value={selected?.value ?? ""} />
			<input tabIndex={-1} aria-hidden required={required} value={selected?.value ?? ""} onChange={() => {}}
			       style={{position: "absolute", opacity: 0, width: 0, height: 0, pointerEvents: "none"}} name={`_${name}`} id={`_${name}`} />
			<button
				id={triggerId}
				ref={buttonRef}
				type="button"
				className={cn(styles.trigger, disabled && styles.isDisabled, required && !selected && styles.isInvalid)}
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={listboxId}
				disabled={disabled}
				onKeyDown={onKeyDownTrigger}
				onClick={() => setOpen(o => !o)}
			>
				<span className={cn(styles.value, !selected && styles.placeholder)}>{selected?.label ?? placeholder}</span>
				<span className={styles.caret} aria-hidden>▾</span>
			</button>
			{open && (
				<ul
					id={listboxId}
					ref={listRef}
					role="listbox"
					aria-activedescendant={highlight >= 0 ? `${listboxId}-opt-${highlight}` : undefined}
					tabIndex={-1}
					className={cn(styles.menu, menuClassName)}
					aria-labelledby={triggerId}
					onKeyDown={onKeyDownList}
				>
					{options.map((o, i) => (
						<li
							key={o.value}
							id={`${listboxId}-opt-${i}`}
							role="option"
							aria-selected={selected?.value === o.value}
							className={cn(styles.option, i === highlight && styles.optionActive, selected?.value === o.value && styles.optionSelected)}
							onMouseEnter={() => setHighlight(i)}
							onMouseDown={(e) => e.preventDefault()}
							onClick={() => commit(o.value)}
						>
							<span className={styles.optionLabel}>{o.label}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}