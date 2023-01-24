"use strict";
function toString(logObj) {
    console.log(`${logObj.firstName} ${logObj.lastName} is ${logObj.age} and his favorite color is ${logObj.favoriteColor}.`);
}
function method_printContactDetails(printObj) {
    console.log(`${printObj.firstName} ${printObj.lastName} is ${printObj.age} years old and her favorite color is ${printObj.favoriteColor}.\n${printObj.firstName} can be reached at ${printObj.phoneNumber} or ${printObj.email}.`);
}
let joe = {
    firstName: "Joe",
    lastName: "Smoe",
    age: 30,
    favoriteColor: "Blue"
};
let taylor = {
    firstName: "Taylor",
    lastName: "Maylor",
    age: 32,
    favoriteColor: "Magenta",
    phoneNumber: "123-456-7890",
    email: "taylor.maylor@test.com"
};
toString(joe);
method_printContactDetails(taylor);
