import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		type: {
			control: {
				type: "select",
				options: ["button", "submit", "reset"],
			},
		},
		variant: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
		size: {
			control: {
				type: "select",
				options: ["base", "sm", "lg"],
			},
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export default meta;
