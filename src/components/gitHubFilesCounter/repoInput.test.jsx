import React from 'react';
import { render } from '@testing-library/react';
import { RepoInput } from './RepoInput';

describe('RepoInput component', () => {
  it('renders input field and search button', () => {
    const { getByPlaceholderText, getByAltText } = render(<RepoInput />);

    const inputElement = getByPlaceholderText(
      'https://api.github.com/repos/[USER]/[REPO]',
    );
    const searchButton = getByAltText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
