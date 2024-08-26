
import { fn } from "@storybook/test";
import Input from "./Input";

export const ActionsData = {
  /**
   * on change callback handler. cool!
   */
  onChange: fn(),
};

export default {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
   value: 'This is text',
   variant: 'solid',
   color: 'primary',
   type: "text",
  },
};
