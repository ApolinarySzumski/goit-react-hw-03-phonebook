import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    setFilteredContacts([
      ...contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    ]);
  }, [contacts, filter]);

  const handleChangeNameInput = e => {
    setName(e.target.value);
  };
  const handleChangeNumberInput = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name) === undefined) {
      setContacts([...contacts, { name, number }]);
    } else {
      alert(`${e.target[0].value} is already in contact list`);
    }
  };

  const handleChangeFilterInput = e => {
    setFilter(e.target.value);
  };

  const handleCLick = contactToDelete => {
    setFilteredContacts(
      filteredContacts.filter(contact => contact !== contactToDelete)
    );
    setContacts(contacts.filter(contact => contact !== contactToDelete));
  };

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
              value={name}
              //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChangeNameInput}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChangeNumberInput}
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
      <h2>Contacts</h2>
      <>
        <p>Find contacts by name</p>
        <input
          type="tel"
          name="filter"
          value={filter}
          title="Find contacts by name"
          onChange={handleChangeFilterInput}
        />
      </>
      <h1>Contact List</h1>
      <>
        <ul>
          {filteredContacts.map(contact => (
            <li key={nanoid()}>
              <p>
                {contact.name}: {contact.number}
                <button onClick={() => handleCLick(contact)}>Delete</button>
              </p>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};

export default App;
