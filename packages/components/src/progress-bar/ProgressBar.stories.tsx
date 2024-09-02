import ProgressBar from "./ProgressBar";

export const ActionsData = {
};

export default {
  component: ProgressBar,
  title: 'ProgressBar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
   value: 20,
  },
};
