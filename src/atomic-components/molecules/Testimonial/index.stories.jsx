import React from 'react';

import Testimonial from '.';

export default {
  title: 'Electrician-Home/molecules/Testimonial',
  component: Testimonial,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Testimonial {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
