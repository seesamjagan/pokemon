
import { fn } from "@storybook/test";
import Avatar from "./Avatar";

export const ActionsData = {
  // onArchiveTask: fn(),
  // onPinTask: fn(),
};

export default {
  component: Avatar,
  title: 'Avatar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    name: "Dummy",
    src: "https://picsum.photos/200/300"
  },
};
