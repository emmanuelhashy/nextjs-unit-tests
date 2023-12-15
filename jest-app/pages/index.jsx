import { useState } from 'react';
import ContactForm from '../components/AddContact';
import ContactList from '../components/ContactList';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}
