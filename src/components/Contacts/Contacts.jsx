import {
  ContactList,
  ContactInfo,
  Contact,
  DeleteButton,
} from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contactList, deleteContact }) => {
  return (
    <ContactList>
      {contactList.map(contact => {
        return (
          <Contact key={contact.id}>
            <ContactInfo>{contact.name} :</ContactInfo>
            <ContactInfo>{contact.number}</ContactInfo>
            <DeleteButton onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteButton>
          </Contact>
        );
      })}
    </ContactList>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
