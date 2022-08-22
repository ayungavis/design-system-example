import React from "react";
import { Meta, Story } from "@storybook/react";

import Button from "./button";
import type { ButtonProps } from "./button.types";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Variants of the button",
      defaultValue: "default",
      control: {
        type: "select",
        options: ["default", "outline"],
      },
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
  children: "Button",
};
