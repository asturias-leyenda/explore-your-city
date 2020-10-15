import React from 'react';
import { render } from '@testing-library/react';
import { App, sum } from './App';

test('adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
