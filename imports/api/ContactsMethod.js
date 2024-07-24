import { ContactsCollection } from "./ContactsCollection";
import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
// to call it on client side
Meteor.methods({
  contacts({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name || !email || !imageUrl) {
      throw new Meteor.Error("invalid input data");
    }

    return ContactsCollection.insertAsync({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    return ContactsCollection.removeAsync(contactId);
  },
});
