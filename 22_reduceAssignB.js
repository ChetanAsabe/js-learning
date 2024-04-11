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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];



console.log();
console.log(`1. Find all employees from 'Wipro' company`);

const wipro = arrayEmps.forEach((element) => {
    if(element.emp_company == 'Wipro')
        console.log(`Name : ${element.emp_name} , Company : ${element.emp_company}`);
})

console.log();
console.log(`2. Find all employees from 'IT' or 'HR' dept`);

const itAndHr = arrayEmps.forEach((element) => {
    if(element.emp_dept == 'IT' || element.emp_dept == 'HR')
        console.log(`Name : ${element.emp_name} , Dept : ${element.emp_dept}`);
})


console.log();
console.log(`3. Find all employees whose emp id's are greater than 50`);

constemp = arrayEmps.forEach((element) => {
    if(element.emp_id > 50)
        console.log(`Name : ${element.emp_name} , Salary : ${element.emp_id}`);
})


console.log();
console.log(`4. Find all employees whose names starts with 'A' or 'V' or 'M'`);

const name = arrayEmps.forEach((element) => {
    if(element.emp_name.startsWith('A') || element.emp_name.startsWith('V') || element.emp_name.startsWith('M'))
        console.log(`Name : ${element.emp_name} , Starts with '${element.emp_name.charAt(0)}'`);
})


console.log();
console.log(`5. Find the average salary of employee for all dept`);

let sal = 0
const avgSalary = arrayEmps.forEach((element) => {
    sal += element.emp_salary;
})
console.log(`Avg Salary of employees of all dept is : ${sal / arrayEmps.length}`);


console.log();
console.log(`6. Find the average salary for 'IT' dept`);

const newArray = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalary = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`Average salary from IT department is: ${sumSalary/newArray.length}`);
console.log();