import { Meta as MetaSB, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeDecorator } from "../../stories/decorators/ThemeDecorator";
import { Button } from "./Button";


const meta = {
    title: 'Components/Button',
    component: Button,
    decorators: [ThemeDecorator],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        
    },
    args: { onClick: fn() },

} satisfies MetaSB<typeof Button>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  
}

export const WithText: Story = {
    args: {
        children: <span>Text</span>
    }
} 