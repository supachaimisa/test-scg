const { ContactsModel } = require("../models/contacts.model");
const contactModel = new ContactsModel();
const contactsController = {
  listAll: (req,res) => {
    res.send(contactModel.getContacts());
  },
  setGroup: (req,res) => {
    const body = req.body
    res.send(contactModel.addGroup(body.name))
  },
  setContact: (req,res) => {
    const body = req.body
    res.send(contactModel.addGroupContact(body.groupId,body.newContact))
  },
  getContactByGroup: (req,res) => {
    const body = req.body
    res.send(contactModel.getContactByGroup(body.groupId))
  }
};
module.exports = contactsController;
