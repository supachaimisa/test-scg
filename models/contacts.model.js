class ContactsModel {
    constructor() {
      this.contacts = [
        {
          id: 1,
          name: "Family",
          type: "Groups",
          contacts: [
            {
              id: 1,
              firstName: "Dad",
              lastName: "dy",
              brithDate: "12/12/1998",
              phone: "064-584-6589",
              url: "www.fb.com",
            }
          ],
        },
        {
          id: 2,
          name: "Office",
          type: "Groups",
          contacts: [
            {
              id: 1,
              firstName: "Jhone",
              lastName: "doe",
              brithDate: "12/08/1995",
              phone: "064-584-6589",
              url: "www.ro89.com",
            },
          ],
        },
      ];
    }
  
    getContacts() {
      return this.contacts.map((item)=>{
          return {
              ...item,
              countContact: item.length
          }
      });
    }
    addGroup(_name){
      const _id = this.contacts.length+ Math.floor(Math.random()*100)
      this.contacts.push(
          {
              id: _id,
              name: _name,
              type: "Groups",
              contacts: []
          }
      )
      return this.contacts
    }
    addGroupContact(groupId,_newContact){
  
      const newContact = {
          id: this.contacts.length+ Math.floor(Math.random()*100) ,
          ..._newContact
      }
      const newValue = this.contacts.map((item) =>{
          if(item.id === groupId){
              return {
                  ...item,
                  contacts: [
                      ...item.contacts,
                      newContact
                  ]
              }
          }
          return item
      })
      this.contacts = newValue
      return this.contacts;
    }
    getContactByGroup(id){
      const _contacts = this.contacts.find((item) => item.id === id)
      const response = {
          groupName: _contacts.name,
          contacts: _contacts.contacts
      }
      return response
    }
  }
  
  module.exports.ContactsModel = ContactsModel
  