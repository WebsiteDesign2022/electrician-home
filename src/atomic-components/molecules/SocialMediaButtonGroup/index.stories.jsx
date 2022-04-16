import React from 'react';

import SocialMediaButtonGroup from '.';

export default {
  title: 'Electrician-Home/molecules/SocialMediaButtonGroup',
  component: SocialMediaButtonGroup,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SocialMediaButtonGroup {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
