class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    details() {
        console.log("Id : " + this.emp_id + " Name : " + this.emp_name + " Dept : " + this.emp_dept + " Salary : " + this.emp_salary + " Company : " + this.emp_company);
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log();
console.log(`1 . find all employees working in 'TCS' & log only name and company on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_company == "TCS") {
        console.table("Name: " + element.emp_name +  " " + " Company: " + element.emp_company);
    }
})

console.log();
console.log(`2 . find the 'Finance' dept employess, log only department & employee name on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_dept == "Finance") {
        console.table("Name: " + element.emp_name + " Dept: " + element.emp_dept);
    }
})

console.log();
console.log(`3 . find the employees whose name starts with 'R' & log complete details on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_name.startsWith('R')){
        element.details();
    }
})

console.log();
console.log(`4 . find the employees whose salary is greater than 75000 & log name, company, salary on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_salary > 75000) {
        console.log("Name : " + element.emp_name + "  Company : " + element.emp_company + "  Salary : " + element.emp_salary);
    }
})

console.log();
console.log(`5 . find the emp's whose salary is greater than or equal to 50000 & from 'IT' dept and log complete details on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_salary >= 50000 && element.emp_dept == "IT") {
        element.details();
    }
})

console.log();
console.log(`6 . find out all emp's from company 'Infy' and log complete details on console.`);

arrayEmployees.forEach((element) => {
    if(element.emp_company == "Infy") {
        element.details();
    }
})
console.log();