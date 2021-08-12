// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import logo from "./assets/logo.png";

export default create({
  base: 'light',
  brandTitle: 'Health Shield Design System',
  brandUrl: 'https://healthshield.co.uk',
  brandImage: logo,
});