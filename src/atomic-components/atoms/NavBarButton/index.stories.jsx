import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarButton from './index';

export default {
    title: 'Electrician-Home/atoms/NavBarButton',
    component: NavBarButton,
    parameters: {
        layout: 'fullscreen'
    }
};

const Template = (args) => <NavBarButton {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {
    link: 'link', 
    displayName: 'display name' 
};
