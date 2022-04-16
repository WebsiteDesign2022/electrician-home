import React from 'react';

import FeatureBox from '.';

export default {
  title: 'Electrician-Home/molecules/FeatureBox',
  component: FeatureBox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <FeatureBox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
