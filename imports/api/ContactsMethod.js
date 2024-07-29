import { ContactsCollection } from "./ContactsCollection";
import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
// to call it on client side
Meteor.methods({
  contacts({ name, email, imageUrl,walletId }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(walletId,String);
    if (!name || !email || !imageUrl) {
      throw new Meteor.Error("invalid input data");
    }
    if(!walletId){
      throw new Meteor.Error("Wallet ID is requierd")
    }

    return ContactsCollection.insertAsync({
      name,
      email,
      imageUrl,
      walletId,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ contactId }) {
    check(contactId, String);
    return ContactsCollection.removeAsync(contactId);
  },

  "contacts.archive"({ contactId }) {
    check(contactId, String);
     ContactsCollection.updateAsync({ _id: contactId }, { $set: { archived: true } });
  },
});
