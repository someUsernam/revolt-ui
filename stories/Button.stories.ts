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
		onClick: {
			description: "The function to call when the button is clicked",
		},
		children: {
			description: "The content of the button",
		},
		type: {
			description: "The type of the button",
			control: {
				type: "select",
				options: ["button", "submit", "reset"],
			},
		},
		variant: {
			description: "The variant of the button",
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
		size: {
			description: "The size of the button",
			control: {
				type: "select",
				options: ["base", "sm", "lg"],
			},
		},
		disabled: {
			description: "Whether the button is disabled",
		},
		className: {
			description: "Additional classes to add to the button",
		},
		buttonRef: {
			description: "A ref to the button element",
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {},
};

export const Secondary: Story = {
	args: {},
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
