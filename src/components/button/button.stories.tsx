import React from 'react';
import { Button } from './button';
export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args: typeof Button) => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  label: 'Hello World',
  backgroundColor: 'green',
};
