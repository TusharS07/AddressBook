var readlineSync = require('readline-sync');
const utility = require('./AddressBookOperations');


console.log(" Welcome to Address Book")


while(true) {
    console.log("Menu\n1. Add Contact\n2. View Contacts\n3. Edit Contact\n4. Delete Contact \n5. Exit");
    let choice = readlineSync.questionInt("Enter your choice : ");
    switch (choice) {
        case 1: utility.addContact();
            break;

        case 2: utility.viewCantactDetails();
            break;

        case 3: utility.editContact();
            break;

        case 4: utility.deleteCantactData();
            break;

        case 5:
            return;

        default: console.log("Invalid Choice!!!");
            break;
    }
}
