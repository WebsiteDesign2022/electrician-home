import React from 'react';

import FrontPageHero from '.';

export default {
  title: 'Electrician-Home/organisms/SectionDivider',
  component: FrontPageHero,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <FrontPageHero {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
