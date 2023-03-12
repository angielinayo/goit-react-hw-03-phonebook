import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
    filter: '',
  };

  updateContacts = ({ name, number }) => {
    const contactExists = this.state.contacts.find(contact => {
      return contact.name === name || contact.number === number;
    });

    contactExists
      ? Report.info(
          '',
          `Contact with name ${name} and number ${number} already exists`,
          'Okay'
        )
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              name,
              number,
              id: nanoid(),
            },
          ],
        }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.updateContacts} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} filter={this.filterContacts} />
          <Contacts
            contactList={filteredContacts}
            deleteContact={this.deleteContacts}
          />
        </Section>
      </>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  id: PropTypes.string,
};
