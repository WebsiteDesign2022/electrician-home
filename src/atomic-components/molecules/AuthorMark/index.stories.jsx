import React from 'react';

import AuthorMark from '.';

export default {
  title: 'Electrician-Home/molecules/AuthorMark',
  component: AuthorMark,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <AuthorMark {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
