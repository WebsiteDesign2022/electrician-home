import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  test('renders the correct title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Electrician Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders App correctly', () => {
    const app = TestRenderer.create(
      <App />
    );

    expect(app.toJSON()).toMatchSnapshot();
  });
});
