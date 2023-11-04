import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactListElement from './ContactListElement/ContactListElement';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.contacts.find(c => c.name === e.target[0].value)) {
      return alert(`${e.target[0].value} is already in contacts`);
    } else {
      return this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          {
            id: nanoid(),
            name: prev.name,
            number: prev.number,
          },
        ],
      }));
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = contactToRemove => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(c => c !== contactToRemove),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          name={this.state.name}
          number={this.state.number}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} change={this.handleChange} />
        <ContactList>
          {filteredContacts.map(contact => {
            const deleteContact = () => {
              this.handleDelete(contact);
            };
            return (
              <ContactListElement
                key={nanoid()}
                element={contact}
                deleteElement={deleteContact}
              />
            );
          })}
        </ContactList>
      </div>
    );
  }
}
