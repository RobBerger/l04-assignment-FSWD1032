interface PersonInterface {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    favoriteColor?: string;
}

function toString(logObj: PersonInterface) {
    console.log(`${logObj.firstName} ${logObj.lastName} is ${logObj.age} and his favorite color is ${logObj.favoriteColor}`)
}

interface ContactInterface extends PersonInterface {
    [phoneNumber: number]: string;
    email?: string;
}

let joe: PersonInterface = {
    firstName: "Joe",
    lastName: "Smoe",
    age: 30,
    favoriteColor: "Blue"
}

toString(joe)