// YourComponent.stories.ts | YourComponent.stories.tsx

import React from 'react';

// import { Story, Meta } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from './Test';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Test',
  component: Test,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', background: "green" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Test>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'hello world test'
  /*👇 The args you need here will depend on your component */
};