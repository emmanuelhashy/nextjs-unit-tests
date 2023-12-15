export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </ul>
  );
}
