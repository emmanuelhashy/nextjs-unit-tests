import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../pages';

describe('Contact Manager', () => {
  it('allows adding a new contact', () => {
    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'Sammy' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'sammy@example.com' },
    });
    fireEvent.click(screen.getByText('Add Contact'));

    expect(screen.getByText('Sammy - sammy@example.com')).toBeInTheDocument();
  });
});
