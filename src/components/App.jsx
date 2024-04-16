import { INITIAL_DATA } from 'constanses/INITIAL_DATA';
import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook } from './Form/Phonebook';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [data, setData] = useState(INITIAL_DATA);
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'filter') {
      setFilter(value);
    }
    setData(prev => {
      if (name === 'filter') {
        return { name, ...prev };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  useEffect(() => {
    const data = window.localStorage.getItem('contacts');
    if (data !== null) setContacts(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook
        contacts={contacts}
        data={data}
        setContacts={setContacts}
        handleChange={handleChange}
      />
      <h2>Filter</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <h1>Contact List</h1>
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        filteredContacts={filteredContacts}
      />
    </>
  );
};

export default App;
