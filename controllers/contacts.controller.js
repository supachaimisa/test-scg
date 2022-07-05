const { ContactsModel } = require("../models/contacts.model");
const contactModel = new ContactsModel();
const contactsController = {
  getListAll: (req,res) => {
    res.send(contactModel.getContacts());
  },
  addGroup: (req,res) => {
    const body = req.body
    res.send(contactModel.addGroup(body.name))
  },
  addContact: (req,res) => {
    const body = req.body
    res.send(contactModel.addGroupContact(body.groupId,body.newContact))
  },
  getContactByGroup: (req,res) => {
    const body = req.body
    res.send(contactModel.getContactByGroup(body.groupId))
  }
};
module.exports = contactsController;
