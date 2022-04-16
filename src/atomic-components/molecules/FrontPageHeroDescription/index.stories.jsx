import React from 'react';

import FrontPageHeroDescription from '.';

export default {
  title: 'Electrician-Home/molecules/FrontPageHeroDescription',
  component: FrontPageHeroDescription,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <FrontPageHeroDescription {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};
