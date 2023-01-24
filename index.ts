interface PersonInterface {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    favoriteColor?: string;
}

function toString(logObj: PersonInterface) {
    console.log(`${logObj.firstName} ${logObj.lastName} is ${logObj.age} and his favorite color is ${logObj.favoriteColor}.`)
}

interface ContactInterface extends PersonInterface {
    phoneNumber: any;
    email?: string;
}

function method_printContactDetails(printObj: ContactInterface) {
    console.log(`${printObj.firstName} ${printObj.lastName} is ${printObj.age} years old and her favorite color is ${printObj.favoriteColor}.\n${printObj.firstName} can be reached at ${printObj.phoneNumber} or ${printObj.email}.`)
}

let joe: PersonInterface = {
    firstName: "Joe",
    lastName: "Smoe",
    age: 30,
    favoriteColor: "Blue"
}

let taylor: ContactInterface = {
    firstName: "Taylor",
    lastName: "Maylor",
    age: 32,
    favoriteColor: "Magenta",
    phoneNumber: "123-456-7890",
    email: "taylor.maylor@test.com"
}

toString(joe)
method_printContactDetails(taylor)