const addressBook = require('./AddressBookOperations');

class Utility {
    // checkValidation = (validation, parameter) => {
    //     let flag = true;
    //     while (flag) {
    //         if (!validation.test(parameter)) {
    //             console.log("Invalid");
    //             parameter = readlineSync.question("Enter again: ");
    //         }
    //         else {
    //             flag = false;
    //         }
    //     }
    // }

    deleteContact = (index, addressBookArray) => {
        return (new Promise((resolve, reject) => {
            if(index != -1) {
                addressBookArray.splice(index, 1);
                resolve("Contact Deleted");
            } else {
                reject("Contact Not Found")
            }
        }))
    }
}
module.exports = new Utility();