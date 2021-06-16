/**
 * @format
 */

import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const { getByTestId } = render(<App />);

  const view = getByTestId('app');

  expect(view.props.children).toBe('App');
});
