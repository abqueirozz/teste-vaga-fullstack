import { Meta as MetaSB, StoryObj } from "@storybook/react";
import { PaginationComponent } from "./PaginationComponent";
import { ThemeDecorator } from "../../../../stories/decorators/ThemeDecorator";
import { fn } from "@storybook/test";


const meta = {
    title: 'Components/PaginationComponent',
    component: PaginationComponent,
    decorators: [ThemeDecorator],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        
    },

} satisfies MetaSB<typeof PaginationComponent>;

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args:{
        state:{page:10},
        size:100,
        dispatch: fn()
    } 
}

export const LimitPrev: Story = {
    args:{
        state:{page:1},
        size:10,
        dispatch: fn()
    } 
}

export const LimitNext: Story = {
    args:{
        state:{page:10},
        size:10,
        dispatch: fn()
    } 
}

