class Contacts {
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
            lastName: "",
            brithDate: "",
            phone: "064-584-6589",
            url: "",
          },
          {
            id: 2,
            firstName: "Sister",
            lastName: "",
            brithDate: "",
            phone: "084-564-4568",
            url: "",
          },
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
            lastName: "",
            brithDate: "",
            phone: "064-584-6589",
            url: "",
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
  setGroup(_name){
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
  setGroupContact(groupId,_newContact){

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
  getGroupContactById(id){
    const _contacts = this.contacts.find((item) => item.id === id)
    const response = {
        groupName: _contacts.name,
        contacts: _contacts.contacts
    }
    return response
  }
}

module.exports.Contacts = Contacts
