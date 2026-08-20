import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders the portfolio introduction and main sections', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /katarya johnson-williams/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/build b2b software that helps people/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /coding is a tool/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /clear information/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /technical tools change/i })).toBeInTheDocument();
  });

  it('uses LinkedIn as the primary connection path', () => {
    render(<App />);

    const linkedinLinks = screen.getAllByRole('link', { name: /linkedin/i });
    expect(linkedinLinks).not.toHaveLength(0);
    linkedinLinks.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/katarya-johnson-williams/',
      );
    });
  });

  it('provides a skip link and hides decorative art', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main');
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2);
  });

  it('keeps GitHub as a secondary footer link', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/HoneyKat11',
    );
  });
});
