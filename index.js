import {testframework} from './testframework.js'
const scripts = `
const company = new Company();
const emp1 = new Employee("Vasya", 1000, "HR");
const emp2 = new Employee("Ivan", 1200, "HR");
const emp3 = new Employee("Dima", 1300, "HR");
const wageEmp1 = new WageEmployee("Andrey", 800, "IT", 10, 50);
const wageEmp2 = new WageEmployee("Alex", 900, "IT", 5, 60);
const manager1 = new Manager("David", 1500, "Sales", 1.5);
const manager2 = new Manager("Eva", 1500, "IT", 2);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(wageEmp1);
company.addEmployee(wageEmp2);
company.addEmployee(manager1);
company.addEmployee(manager2);
`;

testframework('Company Class Tests', scripts,
  [
    'Object.keys(company.employees).length',
    'company.addEmployee(emp3); Object.keys(company.employees).length', 
    'company.deleteEmployee(emp1); Object.keys(company.employees).length',
    'company.getDepBudget("HR")',
    'company.getDepBudget("IT")',
    'company.getEmployeesMaxSalary()[0].name',
    'company.getEmployeesDepartment("IT").length'
  ],
  [
    6,              // amount of employees Expected: 6
    7,              // amount of employees after addition Expected: 7
    5,              // amount of employees after deletion Expected: 5
    2200,           // HR department budget Expected: 2200
    5500,           // IT department budget Expected: 5500
    "Eva",          // max salary Expected: Eva (1500*2 = 3000)
    3               // employees in IT department Expected: 3
  ]
);
