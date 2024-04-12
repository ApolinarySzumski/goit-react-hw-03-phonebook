import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, setContacts, filteredContacts }) => {
  const handleDelete = contactToDelete => {
    setContacts(contacts.filter(contact => contact !== contactToDelete));
  };
  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <li key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
              <button onClick={() => handleDelete(contact)}>Delete</button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setContacts: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
