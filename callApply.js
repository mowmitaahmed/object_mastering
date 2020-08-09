const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson = {
    firstName : 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'Golam',
    salary: 20000
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
normalPerson.chargeBill();
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary);