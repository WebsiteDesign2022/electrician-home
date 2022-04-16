import React from 'react';

import ContactDetailItem from '.';

export default {
    title: 'Electrician-Home/molecules/ContactDetailItem',
    component: ContactDetailItem,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
};

const Template = (args) => <ContactDetailItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
