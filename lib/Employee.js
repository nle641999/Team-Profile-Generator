class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    //user inputs name
    getName() {
        return this.name;
    }

    //user inputs ID
    getId() {
        return this.id;
    }

    //user inputs email
    getEmail() {
        return this.email;
    }

    //returns the employee type
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee; 