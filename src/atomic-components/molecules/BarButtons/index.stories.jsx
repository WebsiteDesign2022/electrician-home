import React from 'react';

import BarButtons from '.';

export default {
    title: 'Electrician-Home/molecules/BarButtons',
    component: BarButtons,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
};

const Template = (args) => <BarButtons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
