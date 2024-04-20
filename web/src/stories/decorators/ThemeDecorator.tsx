import { ThemeProvider } from "../../providers/ThemeProvider";
import { Decorator } from "@storybook/react";

export const ThemeDecorator:Decorator =(Story) => (
    <ThemeProvider>
        <Story/>
    </ThemeProvider>
)
