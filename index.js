"use strict";
function toString(logObj) {
    console.log(`${logObj.firstName} ${logObj.lastName} is ${logObj.age} and his favorite color is ${logObj.favoriteColor}`);
}
let joe = {
    firstName: "Joe",
    lastName: "Smoe",
    age: 30,
    favoriteColor: "Blue"
};
toString(joe);
