import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Github Extension Counter heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Extension Counter/i);
  expect(linkElement).toBeInTheDocument();
});
