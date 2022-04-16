import React from 'react';

import FeatureGrid from '.';

export default {
  title: 'Electrician-Home/organisms/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <FeatureGrid {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    featureList: [
        {
            title: 'Primary title', 
            description: 'Primary description. Primary description. Primary description.' 
        },
        {
            title: 'Primary title', 
            description: 'Primary description. Primary description.' 
        },
        {
            title: 'Primary title', 
            description: 'Primary description' 
        },
        {
            title: 'Primary title', 
            description: 'Primary description' 
        },
        {
            title: 'Primary title', 
            description: 'Primary description. Primary description. ' 
        },
        {
            title: 'Primary title', 
            description: 'Primary description. Primary description. Primary description.' 
        }
    ]
};
