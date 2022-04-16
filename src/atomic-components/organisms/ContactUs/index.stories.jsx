import React from 'react';

import ContactUs from '.';

export default {
  title: 'Electrician-Home/organisms/ContactUs',
  component: ContactUs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <ContactUs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
