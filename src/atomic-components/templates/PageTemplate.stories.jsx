import React from 'react';

import PageTemplate from './PageTemplate';

export default {
  title: 'Electrician-Home/Page',
  component: PageTemplate,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <PageTemplate {...args} />;

export const HomePage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomePage.args = {
  
};
