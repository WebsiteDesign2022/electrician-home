import React from 'react';

import AboutUs from '.';

export default {
  title: 'Electrician-Home/organisms/AboutUs',
  component: AboutUs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <AboutUs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
