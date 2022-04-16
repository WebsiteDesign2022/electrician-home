import React from 'react';

import TopLeftTriangle from './index';

export default {
  title: 'Electrician-Home/atoms/TopLeftTriangle',
  component: TopLeftTriangle,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <TopLeftTriangle {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
TopLeftTriangle.args = {
};

export const Primary = Template.bind({});