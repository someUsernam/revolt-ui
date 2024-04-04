import React, { ComponentProps, ElementRef } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary";
	className?: string;
	disabled?: boolean;
	buttonRef?: React.RefObject<ElementRef<"button">>;
	children: React.ReactNode;
}

const dataHover = "";

const dataActive = "";

const dataFocus = "";

const dataDisabled =
	"data-[disabled]:opacity-50 after:data-[disabled]:shadow-none before:data-[disabled]:shadow-none";

const after =
	"after:-z-10 after:absolute after:inset-0 after:rounded-[calc(theme(borderRadius.lg)-1px)]";

const base = `relative rounded-lg inline-flex items-center justify-center gap-x-2 text-base/6 font-semibold isolate px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 ${after}`;

const variants = {
	primary: `${base} bg-blue-500 text-white `,
	secondary: `${base} bg-red-500 text-white`,
};

function Button({
	type = "button",
	variant = "primary",
	children,
	className = "",
	disabled = false,
	buttonRef,
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			data-variant={variant}
			className={`
				${className}
				${variants[variant]}
				${disabled && dataDisabled}
			`}
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
