import React from 'react';
import { createRoot } from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const root = createRoot(document.createElement('div'));

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

    expect(screen.getByText('Github Extension Counter')).toBeInTheDocument();
  });
});
