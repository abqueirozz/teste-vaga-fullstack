import { Meta as MetaSB, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "../../stories/decorators/ThemeDecorator";
import { TextInput } from "./TextInput";


const meta = {
    title: 'Components/TextInput',
    component: TextInput,
    decorators: [ThemeDecorator],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        text: { defaultValue: 'Some Label' },
    }

} satisfies MetaSB<typeof TextInput>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        text: 'label'
    }

}