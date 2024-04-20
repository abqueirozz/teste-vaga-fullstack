import { Meta as MetaSB, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../stories/decorators/ThemeDecorator";
import { Header } from "./Header";


const meta = {
    title: 'Components/Header',
    component: Header,
    decorators: [ThemeDecorator],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },

} satisfies MetaSB<typeof Header>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {

}