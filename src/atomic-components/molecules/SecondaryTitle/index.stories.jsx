import React from 'react';

import SecondaryTitle from '.';

export default {
  title: 'Electrician-Home/molecules/SecondaryTitle',
  component: SecondaryTitle,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <SecondaryTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    titlePartOne: 'Title Part One', 
    titlePartTwo: 'Title Part Two'
};
