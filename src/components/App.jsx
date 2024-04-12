import { INITIAL_DATA } from 'constanses/INITIAL_DATA';
import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook } from './Form/Phonebook';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
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
      <Phonebook
        contacts={contacts}
        data={data}
        setContacts={setContacts}
        handleChange={handleChange}
      />
      <h2>Filter</h2>
      <Filter data={data} handleChange={handleChange} />
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
