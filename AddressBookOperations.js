var readlineSync = require('readline-sync');
const utility = require('./Utility');
let addressBookArray = new Array();

const nameValideation = RegExp("^[A-Z]{1}[a-z]{2,}$");
const zipCodeValidation = RegExp("^[1-9]{1}[0-9]{5}$");
const phoneValidation = RegExp("'^[0-9]{2}|\s|[0-9]{10}$");
const emailValidation = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");


class AddressBookOperations {

    //Add Contact
    addContact() {

        let firstName = readlineSync.question("Enter First Name: ");
        let flag = true;
        while (flag) {
            if (!nameValideation.test(firstName)) {
                console.log("Invalid name");
                firstName = readlineSync.question("Enter First Name: ");
            }
            else {
                flag = false;
            }
        }


        let lastName = readlineSync.question("Enter Last Name: ");
        flag = true;
        while (flag) {
            if (!nameValideation.test(lastName)) {
                console.log("Invalid Last Name");
                lastName = readlineSync.question("Enter Last Name: ");
            }
            else {
                flag = false;
            }
        }



        let index = addressBookArray.findIndex(x => x.firstName === firstName && x.lastName === lastName);
        if (index != -1) {
            console.log("contact already exist with this name----");
            return this.addContact()
        }


        let address = readlineSync.question("Enter Address: ");

        let city = readlineSync.question("Enter City: ");

        let state = readlineSync.question("Enter State: ");

        let zipCode = readlineSync.questionInt("Enter Zip code: ");
        flag = true;
        while (flag) {
            if (!zipCodeValidation.test(zipCode)) {
                console.log("Invalid zipcode");
                zipCode = readlineSync.question("Enter Zip code: ");
            }
            else {
                flag = false;
            }
        }



        let emailID = readlineSync.question("Enter Email ID: ");
        flag = true;
        while (flag) {
            if (!emailValidation.test(emailID)) {
                console.log("Invalid email");
                emailID = readlineSync.question("Enter Email ID: ");
            }
            else {
                flag = false;
            }
        }


        let phoneNumber = readlineSync.questionInt("Enter Phone Number: ");
        flag = true;
        while (flag) {
            if (!phoneValidation.test(phoneNumber)) {
                console.log("Invalid");
                phoneNumber = readlineSync.question("Enter Phone Number: ");
            }
            else {
                flag = false;
            }
        }

        let contact = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            state: state,
            city: city,
            zipCode: zipCode,
            phoneNumber: phoneNumber,
            email: emailID
        }

        addressBookArray.push(contact);
        console.log("Contact Added Successfully!!");
    }


    // deleteCantactData() {
    //     let name = readlineSync.question("enter The First name: ");
    //     let index = addressBookArray.findIndex(x => x.firstName === name);
    //     console.log(index);
    //     utility.deleteContact(index, addressBookArray)
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    deleteCantactData() {
        let name = readlineSync.question("enter The First name: ");
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index != -1) {
            addressBookArray.splice(index, 1);
            console.log("Contact Deleted");
        } else {
            console.log("Contact Not Found")
        }
    }


    editContact() {
        let name = readlineSync.question("enter The First name: ");
        let index = addressBookArray.findIndex(x => x.firstName === name);
        if (index == -1) {
            console.log("contact not found")
        } else {
            console.log("Update Menu\n 1.FirstName \n 2.LastName \n 3.Address \n 4.contact Number \n 5.Email-Id");
            let choice = readlineSync.questionInt("Enter your choice : ");
            switch (choice) {
                case 1:
                    let name = readlineSync.question("Enter First Name: ");
                    let flag = true;
                    while (flag) {
                        if (!nameValideation.test(name)) {
                            console.log("Invalid name");
                            name = readlineSync.question("Enter First Name: ");
                        }
                        else {
                            flag = false;
                            addressBookArray[index].firstName = name;
                        }
                    }
                    break;



                case 2:
                    let newLastnm = readlineSync.question("Enter Last Name: ");
                    flag = true;
                    while (flag) {
                        if (!nameValideation.test(newLastnm)) {
                            console.log("Invalid Last Name");
                            newLastnm = readlineSync.question("Enter Last Name: ");
                        }
                        else {
                            flag = false;
                            addressBookArray[index].lastName = newLastnm;
                        }
                    }
                    break;

                case 3:
                    let newaddress = readlineSync.question("Enter Address: ");
                    addressBookArray[index].address = newaddress;

                    let newcity = readlineSync.question("Enter City: ");
                    addressBookArray[index].city = newcity;

                    let newstate = readlineSync.question("Enter State: ");
                    addressBookArray[index].state = newstate;

                    let newzipCode = readlineSync.questionInt("Enter Zip code: ");
                    flag = true;
                    while (flag) {
                        if (!zipCodeValidation.test(newzipCode)) {
                            console.log("Invalid zipcode");
                            newzipCode = readlineSync.question("Enter Zip code: ");
                        }
                        else {
                            flag = false;
                            addressBookArray[index].zipCode = newzipCode;
                        }
                    }
                    break;

                case 4:
                    let newphoneNumber = readlineSync.questionInt("Enter Phone Number: ");
                    flag = true;
                    while (flag) {
                        if (!phoneValidation.test(newphoneNumber)) {
                            console.log("Invalid");
                            newphoneNumber = readlineSync.question("Enter Phone Number: ");
                        }
                        else {
                            addressBookArray[index].phoneNumber = newphoneNumber;
                            flag = false;
                        }
                    }
                    break;

                case 5:
                    let newemailID = readlineSync.question("Enter Email ID: ");
                    flag = true;
                    while (flag) {
                        if (!emailValidation.test(newemailID)) {
                            console.log("Invalid email");
                            newemailID = readlineSync.question("Enter Email ID: ");
                        }
                        else {
                            addressBookArray[index].email = newemailID;
                            flag = false;
                        }
                    }
                    break;


                default: console.log("Invalid Choice!!!");
                    break;

            }
            console.log("Contact Updated");
        }
    }

    viewCantactDetails() {
        addressBookArray.forEach((data) => {
            console.log(" Name: " +data.firstName+ " "+data.lastName+ "\n Email-ID: "+data.email+ "\n Phone no: "+data.phoneNumber+ "\n Address : " +data.address+ ", " +data.city+ ", " +data.state+ ", " +data.zipCode);
        })
    }




}
module.exports = new AddressBookOperations();
