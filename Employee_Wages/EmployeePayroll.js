
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.setId(id);
        this.setName(name);
        this.setSalary(salary);
        this.setGender(gender);
        this.setStartDate(startDate);
    }

    setId(id) {
        if (id > 0 && !isNaN(id)) {
            this.id = id;
        } else {
            console.error("Invalid Employee ID! ID must be a positive non-zero number.");
        }
    }

    setSalary(salary) {
        if (salary > 0 && !isNaN(salary)) {
            this.salary = salary;
        } else {
            console.error("Invalid Salary! Salary must be a positive non-zero number.");
        }
    }

    setGender(gender) {
        const genderRegex = /^[MF]$/;
        if (genderRegex.test(gender)) {
            this.gender = gender;
        } else {
            console.error("Invalid Gender! Gender must be 'M' or 'F'.");
        }
    }

    setStartDate(startDate) {
        const date = new Date(startDate);
        const today = new Date();
        if (!isNaN(date) && date <= today) {
            this.startDate = date;
        } else {
            console.error("Invalid Start Date! Start Date cannot be a future date.");
        }
    }

    setName(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (nameRegex.test(name)) {
            this.name = name;
        } else {
            console.error("Invalid Name! Name must start with a capital letter and have at least 3 characters.");
        }
    }

    getDetails() {
        if (this.id && this.name && this.salary && this.gender && this.startDate) {
            return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
        } else {
            return "Invalid Employee Data!";
        }
    }
}

const emp1 = new EmployeePayroll(101, "Muskan", 5000, "F", "2023-05-10");
const emp2 = new EmployeePayroll(-5, "Nancy", 7000, "F", "2022-11-15");
const emp3 = new EmployeePayroll(103, "Pragya", -3000, "M", "2024-01-20");
const emp4 = new EmployeePayroll(104, "Charvi", 6000, "X", "2023-06-01");
const emp5 = new EmployeePayroll(105, "Avishi", 8000, "M", "2026-04-01");

console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());
console.log(emp4.getDetails());
console.log(emp5.getDetails());