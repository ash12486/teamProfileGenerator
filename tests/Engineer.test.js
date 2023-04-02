import Engineer from "../lib/engineer";

test("tests if we can create an engineer object", () => {
    let engineer = new Engineer("Jane Doe", "102102", "jane.doe@company.com", "janedoe123");

    expect(engineer.name).toBe("Jane Doe");
    expect(engineer.id).toBe("102102");
    expect(engineer.email).toBe("jane.doe@company.com");
    expect(engineer.github).toBe("janedoe123")
})