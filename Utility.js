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

    // deleteContact (index, addressBookArray){
    //     console.log(index);
    //     return new Promise((resolve, reject) => {
    //         console.log("working")
    //         if(index != -1) {
    //             addressBookArray.splice(index, 1);
    //              resolve("Contact Deleted");
    //         } else {
    //              reject("Contact Not Found")
    //         }
    //     })
    // }





    async deleteContact (index, addressBookArray){
        console.log(index);
        return new Promise((resolve, reject) => {
            console.log("working")
            if(index != -1) {
                addressBookArray.splice(index, 1);
                 resolve("Contact Deleted");
            } else {
                 reject("Contact Not Found")
            }
        })
    }
}
module.exports = new Utility();