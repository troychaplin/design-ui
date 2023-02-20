import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: { type: "text" },
		},
		description: {
			control: { type: "text" },
		},
	},
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	args: {
		title: "Card Title",
		description: "This is a card",
	},
};
