import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { RadioButton } from "@/components";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/themes/default";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["default", "hover", "focus", "disabled"],
      },
    },
  },
} as Meta;

const Template: StoryFn = ({ theme, ...args }) => (
  <ThemeProvider theme={defaultTheme}>
    <RadioButton {...args} />
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  state: "default",
  checked: false,
  showLabel: true,
  showDescription: false,
  onChange: action("changed"),
};

export const Hover = Template.bind({});
Hover.args = {
  state: "hover",
  checked: false,
  showLabel: true,
  showDescription: false,
  onChange: action("changed"),
};

export const Focus = Template.bind({});
Focus.args = {
  state: "focus",
  checked: false,
  showLabel: true,
  showDescription: false,
  onChange: action("changed"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: "disabled",
  checked: false,
  showLabel: true,
  showDescription: false,
};
