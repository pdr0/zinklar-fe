import React from 'react';
import { render } from '@testing-library/react';
import { FilesCounterResults } from './FilesCounterResults';

describe('FilesCounterResults component', () => {
  it('renders loading message when isLoading is true', () => {
    const { getByText } = render(<FilesCounterResults isLoading={true} />);
    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    const errorMessage = 'An error occurred';
    const { getByText } = render(<FilesCounterResults error={errorMessage} />);
    const errorElement = getByText(
      `There is an error fetching... ${errorMessage}`,
    );
    expect(errorElement).toBeInTheDocument();
  });

  it('renders FileCard components for each item in filteredList', () => {
    const filteredList = {
      pdf: 3,
      jpg: 5,
      txt: 2,
    };

    const { getByText, getByClassName } = render(
      <FilesCounterResults filteredList={filteredList} />,
    );

    Object.keys(filteredList).forEach((extension) => {
      const fileCardElement = getByText(extension);
      expect(fileCardElement).toBeInTheDocument();
    });

    const fileCardElements = getByClassName('filecard');
    expect(fileCardElements.length).toBe(Object.keys(filteredList).length);
  });
});
