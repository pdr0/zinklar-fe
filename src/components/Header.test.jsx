import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from './Header';

describe('Header tests', () => {
  it('should contains the heading 1', () => {
    render(
      <Header>
        <p>hello!</p>
      </Header>,
    );
    const heading = screen.getByText(/hello!/i);
    expect(heading).toBeInTheDocument();
  });
});
