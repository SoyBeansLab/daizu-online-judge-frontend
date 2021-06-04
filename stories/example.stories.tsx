import React from 'react';
import { Story, Meta } from '@storybook/react';

import Example, { ExampleProps } from '~/example';

export default {
  title: 'Example/Example',
  component: Example,
} as Meta;

const Template: Story<ExampleProps> = (args) => <Example {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'タイトル',
  description: '説明文',
};
