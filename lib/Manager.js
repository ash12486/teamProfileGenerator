import Employee from "./Employee.js";

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum
    }

    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager"
    }
}

export default Manager