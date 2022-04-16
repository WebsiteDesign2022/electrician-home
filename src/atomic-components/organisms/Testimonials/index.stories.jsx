import React from "react";

import Testimonials from ".";

export default {
    title: 'Electrician-Home/organisms/Testimonials',
    component: Testimonials,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
};

const Template = (args) => <Testimonials {...args} />

Template.args = {
};

export const Primary = Template.bind({});
Primary.args = {
    testimonials: [
        {
            name: 'Ivan',
            description: 'Testimonial description from Ivan'
        },
        {
            name: 'Shelley',
            description: 'Testimonial description from Shelley'
        }
    ]
};
