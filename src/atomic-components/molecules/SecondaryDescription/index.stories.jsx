import React from 'react';

import SecondaryDescription from '.';

export default {
  title: 'Electrician-Home/molecules/SecondaryDescription',
  component: SecondaryDescription,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SecondaryDescription {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: 'Primary'
};
