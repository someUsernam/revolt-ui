import React, { ComponentProps } from "react";
import { cx } from "../../src/utils/cx";
import { vt } from "../../src/utils/vt";

const variantsMap = {
	primary: "bg-primary text-primary-foreground",
	secondary: "bg-secondary text-secondary-foreground",
	destructive: "bg-destructive text-destructive-foreground",
	muted: "bg-muted text-muted-foreground",
	outlined: "bg-transparent border border-primary text-primary",
	ghost: "bg-transparent text-primary",
} as const;

const sizesMap = {
	sm: "text-sm/6 px-[calc(theme(spacing[2])-1px)] py-[calc(theme(spacing[2])-1px)] sm:px-[calc(theme(spacing.2)-1px)] sm:py-[calc(theme(spacing[1])-1px)]",
	md: "text-base/6 px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6",
	lg: "text-lg/6 sm:text-base/6 px-[calc(theme(spacing[4.5])-1px)] py-[calc(theme(spacing[3.5])-1px)] sm:px-[calc(theme(spacing.4)-1px)] sm:py-[calc(theme(spacing[2.5])-1px)]",
} as const;

const statesMap = {
	hover: "hover:bg-red-600",
	active: "active:bg-blue-700",
	focus:
		"focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500",
	disabled:
		"data-[disabled]:opacity-50 after:data-[disabled]:shadow-none before:data-[disabled]:shadow-none",
} as const;

const before =
	"before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5";

const after =
	"after:-z-10 after:absolute after:inset-0 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]";

const base =
	"relative rounded-lg inline-flex items-center justify-center gap-x-2 font-semibold isolate border";

const button = vt([base, before, after], {
	variants: variantsMap,
	sizes: sizesMap,
	states: statesMap,
});

type ButtonProps = {
	type?: "button" | "submit" | "reset";
	variant?: keyof typeof variantsMap;
	className?: string;
	disabled?: boolean;
	size?: keyof typeof sizesMap;
	children: React.ReactNode;
} & ComponentProps<"button">;

function Button({
	type = "button",
	variant = "primary",
	children,
	className = "",
	disabled = false,
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
			// href={href}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
