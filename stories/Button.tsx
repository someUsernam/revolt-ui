import React, { ComponentProps, ElementRef } from "react";
import { cx } from "../src/utils/cx";
import { vt } from "../src/utils/vt";

interface ButtonProps extends ComponentProps<"button"> {
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary";
	className?: string;
	disabled?: boolean;
	size?: "md" | "sm" | "lg";
	buttonRef?: React.RefObject<ElementRef<"button">>;
	children: React.ReactNode;
}

const after =
	"after:-z-10 after:absolute after:inset-0 after:rounded-[calc(theme(borderRadius.lg)-1px)]";

const base =
	"relative rounded-lg inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold isolate px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6";

const button = vt([base, after], {
	variants: {
		primary: "bg-blue-500 text-white",
		secondary: "bg-red-500 text-white",
	},
	sizes: {
		sm: "px-[calc(theme(spacing[2])-1px)] py-[calc(theme(spacing[2])-1px)] sm:px-[calc(theme(spacing.2)-1px)] sm:py-[calc(theme(spacing[1])-1px)]",
		md: "",
		lg: "text-lg/6 sm:text-lg/6",
	},
	states: {
		hover: "hover:bg-red-600",
		active: "active:bg-blue-700",
		focus: "focus:ring-2 focus:ring-blue-500",
		disabled:
			"data-[disabled]:opacity-50 after:data-[disabled]:shadow-none before:data-[disabled]:shadow-none",
	},
});

function Button({
	type = "button",
	variant = "primary",
	children,
	className = "",
	disabled = false,
	buttonRef,
	size = "md",
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			data-variant={variant}
			className={cx(
				button({
					variant,
					size,
					disabled,
				}),
				className,
			)}
			disabled={disabled}
			data-disabled={disabled}
			ref={buttonRef}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
