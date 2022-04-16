import React from 'react';

import BarBrand from '.';

export default {
    title: 'Electrician-Home/molecules/BarBrand',
    component: BarBrand,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
};

const Template = (args) => <BarBrand {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    brandName: 'Electrician Home'
};

// Empty state unlikely.
