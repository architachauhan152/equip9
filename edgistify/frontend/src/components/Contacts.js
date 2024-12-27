import React from 'react';
// import './Contacts.css';

const Contacts = ({ contacts, selectContact }) => {
  return (
    <div className="contacts-container">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="contact"
          onClick={() => selectContact(contact)}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
