interface PersonInterface {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    favoriteColor?: string;
    toString(): string;
}

interface ContactInterface extends PersonInterface {
    [phoneNumber: number]: string;
    email?: string;
    printContactDetails(): string {
        console.log('a message');
    }
}