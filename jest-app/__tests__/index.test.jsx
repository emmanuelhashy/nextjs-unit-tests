import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contacts from '../pages';

describe('Contact Manager', () => {
  it('should add a new contact', () => {
    render(<Contacts contacts={[]} />);


    fireEvent.change(screen.getByTestId('contact-name-input'), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByTestId('contact-email-input'), { target: { value: 'jane.doe@example.com' } });

    fireEvent.click(screen.getByTestId('submit-contact-button'));

    expect(screen.getByText('Jane Doe - jane.doe@example.com')).toBeInTheDocument();
  });
});