import Manager from "../lib/manager";

test("tests if we can create an manager object", () => {
    let manager = new Manager("Ashlee Huff", "101101", "ashlee.huff@company.com", "100");

    expect(manager.name).toBe("Ashlee Huff");
    expect(manager.id).toBe("101101");
    expect(manager.email).toBe("ashlee.huff@company.com");
    expect(manager.officeNum).toBe("100");
})