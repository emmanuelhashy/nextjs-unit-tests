import { useState } from 'react';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        data-testid="contact-name-input" 
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        data-testid="contact-email-input" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button data-testid="submit-contact-button" type="submit">Add Contact</button>
    </form>
  );
}
