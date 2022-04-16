import React from 'react';

import SocialMediaButton from '.';

export default {
  title: 'Electrician-Home/atoms/SocialMediaButton',
  component: SocialMediaButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SocialMediaButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: 'social-media-button-name',
  link: 'https://www.facebook.com'
};
