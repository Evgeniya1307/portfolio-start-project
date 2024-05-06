import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Main } from './components/section/main/Main';
import { FlexWrapper } from './components/FlexWrapper';





test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByText('Home');
  expect(linkElement).toBeInTheDocument();
});
