import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomDropdown from '../src/component/customDropdown';

// storiesOf('CustomDropdown',module).add('default',()=>);

export default {
  title: 'dropdown',
  component: CustomDropdown,
};

export const test = () => {
  return <CustomDropdown />;
};
