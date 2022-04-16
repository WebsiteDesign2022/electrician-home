import React from 'react';

import TitleWithLineMotif from '.';

export default {
  title: 'Electrician-Home/molecules/TitleWithLineMotif',
  component: TitleWithLineMotif,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <TitleWithLineMotif {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: 'A Title with Line Motif'
};
