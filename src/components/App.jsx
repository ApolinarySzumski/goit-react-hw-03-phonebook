import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [data, setData] = useState({
    name: '',
    number: '',
    filter: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === data.name) === undefined) {
      setContacts([...contacts, data]);
    } else {
      alert(`${e.target[0].value} is already in contact list`);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = contactToDelete => {
    setContacts(contacts.filter(contact => contact !== contactToDelete));
  };

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(data.filter.toLowerCase())
      )
    );
  }, [contacts, data.filter]);

  return (
    <>
      <h1>Phonebook</h1>
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={data.number}
              //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
      <h2>Contacts</h2>
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={data.filter}
          title="Find contacts by name"
          onChange={handleChange}
        />
      </>
      <h1>Contact List</h1>
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
    </>
  );
};

export default App;
