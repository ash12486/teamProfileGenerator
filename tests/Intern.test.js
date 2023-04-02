import Intern from "../lib/intern";

test("tests if we can create an intern object", () => {
    let intern = new Intern("John Doe", "103103", "john.doe@company.com", "UCF");

    expect(intern.name).toBe("John Doe");
    expect(intern.id).toBe("103103");
    expect(intern.email).toBe("john.doe@company.com");
    expect(intern.school).toBe("UCF");
})