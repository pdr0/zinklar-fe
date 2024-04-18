import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FilesCounter } from './FilesCounter';

describe('FilesCounter tests', () => {
  it('should contains the heading 1', async () => {
    render(<FilesCounter token="foo" />);

    const placeholder = screen.getByPlaceholderText(
      'https://api.github.com/repos/[USER]/[REPO]',
    );

    expect(placeholder).toBeInTheDocument();
  });
});
