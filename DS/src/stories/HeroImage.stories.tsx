import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  HeroImage from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
  argTypes: {
    img: { control: 'file'},
  },
} as ComponentMeta<typeof HeroImage>;

const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Example = Template.bind({});
Example.args = {
 img: '',
 title: "test title",
 subTitle:"test",
 link: "#",
 linkTitle:"Example Button"
};

