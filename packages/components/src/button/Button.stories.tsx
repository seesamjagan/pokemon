
import { fn } from "@storybook/test";
import Button from "./Button";

export const ActionsData = {
  /**
   * on click callback handler. cool!
   */
  onClick: fn(),
};

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
   children: 'This is button',
   variant: 'solid',
   color: 'primary',
  },
};
