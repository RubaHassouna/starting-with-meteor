import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch(); //tracker
  });
  return (
    <>
      <h1>ContactList</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};
