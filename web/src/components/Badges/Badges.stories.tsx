import { Meta as MetaSB, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "../../stories/decorators/ThemeDecorator";
import { Badges } from "./Badges";


const meta = {
    title: 'Components/Badges',
    component: Badges,
    decorators: [ThemeDecorator],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        hasX: {
            control: 'boolean'
        },
        text: {
            control: 'text'
        },    },
    args: { onClick: fn() },

} satisfies MetaSB<typeof Badges>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        hasX: false,
        text: 'Badge'
    }
}

export const HasXButton: Story = {
    args: {
        hasX: true,
        text: 'Badge with X button'
    }
} 