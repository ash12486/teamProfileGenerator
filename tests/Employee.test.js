import Employee from "../lib/employee";
const employee = new Employee("Ashlee Huff", "101101", "ashlee.huff@company.com");

test("test if constructor returns correct values", () => {
    expect(employee.name).toBe("Ashlee Huff");
    expect(employee.id).toBe("101101");
    expect(employee.email).toBe("ashlee.huff@company.com");
});

test("test if the getName() method returns the employee name", () => {
    expect(employee.getName()).toBe("Ashlee Huff");
});

test("test if the getId() method returns the employee ID", () => {
    expect(employee.getId()).toBe("101101");
});

test("test if the getEmail() method returns the employee email", () => {
    expect(employee.getEmail()).toBe("ashlee.huff@company.com");
});