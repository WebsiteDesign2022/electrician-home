import React from 'react';

import BottomBar from '.';

export default {
  title: 'Electrician-Home/organisms/BottomBar',
  component: BottomBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <BottomBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
