// Inheritance of interfaces
interface IPerson {
    name: string;
    age: number;
    celebrateBirthday: () => void
}

interface IEmployee extends IPerson {
    talktime: number;
    role: string;
    dept: string;
    promote: () => void
}

let john : IEmployee = {
    name: 'John',
    age: 32,
    talktime: 1000,
    role: 'Accountant',
    dept: 'Finance',
    celebrateBirthday() {
        this.age++;
    },
    promote() {
        this.role = `Senior ${this.role}`;
    }
};

export {}