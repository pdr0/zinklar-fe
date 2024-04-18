import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FileCard } from './FileCard';

describe('FileCard tests', () => {
  it('should contains the heading 1', async () => {
    render(
      <FileCard
        fileExtension="js"
        count="33"
        logoSrc="https://st4.depositphotos.com/16262510/21426/v/1600/depositphotos_214262396-stock-illustration-file-vector-icon-isolated-on.jpg"
      />,
    );
    const extension = screen.getByText('.js');
    const count = screen.getByText('(33)');

    expect(extension).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });
});
