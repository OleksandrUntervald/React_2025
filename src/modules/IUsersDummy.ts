export interface IDummyAddress {
    address: string;
    city: string;
    postalCode: string;
    state: string;
}

export interface IDummyCompany {
    name: string;
    department: string;
    title: string;
}

export interface IDummyUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    domain: string;
    ip: string;
    address: IDummyAddress;
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: IDummyCompany;
    ein: string;
    ssn: string;
    userAgent: string;
}

export interface IUsersDummy {
    users: IDummyUser[];
    total: number;
    skip: number;
    limit: number;
}
