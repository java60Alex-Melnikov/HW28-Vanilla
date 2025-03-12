export default class Company {
    constructor() {
        this.employees = {} 
    }
    addEmployee(empl) {
        this.employees[empl.name] = empl;
    }
    deleteEmployee (empl) {
        delete this.employees[empl.name];
    }
    getDepBudget(department) {
        let totalSalary = 0;
        const employeesArray = Object.values(this.employees);
        for (let i = 0; i < employeesArray.length; i++) {
            if (employeesArray[i].department === department) {
                totalSalary += employeesArray[i].computeSalary();
            }
        }
        return totalSalary;
    }
    getEmployeesMaxSalary() {
        const employeesArray = Object.values(this.employees);
        if (employeesArray.length === 0) {
            return [];
        }
        let maxSalary = employeesArray[0].computeSalary();
        for (let i = 1; i < employeesArray.length; i++) {
            const salary = employeesArray[i].computeSalary();
            if (salary > maxSalary) {
                maxSalary = salary;
            }
        }      
        const maxSalaryEmployees = [];
        for (let i = 0; i < employeesArray.length; i++) {
            if (employeesArray[i].computeSalary() === maxSalary) {
                maxSalaryEmployees.push(employeesArray[i]);
            }
        }        
        return maxSalaryEmployees;
    }
    getEmployeesDepartment(department) {
        const employeesArray = Object.values(this.employees);
        const departmentEmployees = [];
        for (let i = 0; i < employeesArray.length; i++) {
            if (employeesArray[i].department === department) {
                departmentEmployees.push(employeesArray[i]);
            }
        }
        return departmentEmployees;
    }
}