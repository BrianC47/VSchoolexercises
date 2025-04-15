// Create empty array to store employees
const employees = [];


let employeeIDNumber = 1;

// Constructor function

function Employee(name, salary, jobTitle){
    this.name = name; // This refers to the object being created
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.status = "Full Time"; // Default Status
    var today = new Date();
    this.dateHired = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();// Todays date
    this.id = employeeIDNumber++;

}




// Create Employees 
var emp1 = new Employee("Katrina", 90000, "Engineer")
var emp2 = new Employee("Briana", 100000, "Engineer")
var emp3 = new Employee("Joy", 70000, "Engineer")

// Change the Status
emp1.status ="Part Time"; 

//Push Created Employees
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);

// Console log Katrina hire date
console.log(emp1.name + " was hired on " + emp1.dateHired);

console.log(employees);

// getDate() retrns the day of the month fo the given date