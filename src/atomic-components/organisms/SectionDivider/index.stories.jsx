import React from 'react';

import SectionDivider from '.';

export default {
  title: 'Electrician-Home/organisms/SectionDivider',
  component: SectionDivider,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SectionDivider {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
