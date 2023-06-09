"use strict ";
const employees = [];
let main = document.getElementById("main");
let theForm= document.getElementById("employeesForm");
function employee(
  EmployeeId,
  fullName,
  Department,
  Level,
  image_URL
  //   Salary
) {
  this.Employee_Id = EmployeeId;
  this.fullName = fullName;
  this.Department = Department;
  this.Level = Level;
  this.img = image_URL;
  this.Salary = 0;
  employees.push(this);
}

///====calculating the salary && the net salary===
//===============

employee.prototype.calculateSalary = function () {
  if (this.Level === "Senior") {
    let salaryForSenior = Math.random() * (2000 - 1500) + 1500;
    let taxForSenior = 0.07 * salaryForSenior;
    this.Salary = salaryForSenior - taxForSenior;
    console.log(this.Salary);
  }

  if (this.Level === "Mid-Senior") {
    let salaryForMidSenior = Math.random() * (1500 - 1000) + 1000;
    let taxForMidSenior = 0.07 * salaryForMidSenior;
    this.Salary = salaryForMidSenior - taxForMidSenior;
  }

  if (this.Level === "Junior") {
    let salaryForJunior = Math.random() * (1000 - 500) + 500;
    let taxForJunior = 0.07 * salaryForJunior;
    this.Salary = salaryForJunior - taxForSenior;
  }
};

// ==== adding event listener for the form ===
///===================================
theForm.addEventListener('submit',handelSubmit); 

function handelSubmit(event){
  event.preventDefault();
  let employeeName = event.target.employeeName.value;
  let employeeId= event.target.employeeId.value;
  // console.log(event.target.option)
  let Department= event.target;
  let Level=event.target;
  let ImageURL=event.target.image.value;
  let newEmployee = new employee(employeeName, employeeId, Department,Level, ImageURL);
  newEmployee.calculateSalary();
  newEmployee.render();
}





//====== render prototype function ======
// ==================
employee.prototype.render = function () {
  const employeeId = document.createElement("h2");
  employeeId.textContent = this.Employee_Id;
  const fullName = document.createElement("h2");
  fullName.textContent = this.fullName;
  const Department = document.createElement("h2");
  Department.textContent = this.Department;
  const Level = document.createElement("h2");
  Level.textContent = this.Level;
  const image_URL = document.createElement("img");
  image_URL.image_URL = this.img;
  const Salary = document.createElement("h2");
  Salary.textContent = `Salary: ${this.Salary} jd`;
  main.appendChild(employeeId);
  main.appendChild(fullName);
  main.appendChild(Department);
  main.appendChild(Level);
  main.appendChild(Salary);
  main.appendChild(image_URL);
};
// let employee1 = new employee("1000", "Ghazi Samer", "Administration", "Senior");
// let employee2 = new employee("1001", "Lana Ali", "Finance", "Senior");
// let employee3 = new employee("1002", "Tamara Ayoub", "Marketing", "Senior");
// let employee4 = new employee(
//   "1003",
//   "Safi Walid",
//   "Administration",
//   "Mid-Senior"
// );
// let employee5 = new employee("1004", "Omar Zaid", "Development", "Senior");
// let employee6 = new employee("1005", "Rana Saleh	", "Development", "Junior");
// let employee7 = new employee("1006", "Hadi Ahmad", "Finance", "	Mid-Senior");

for (let i = 0; i < employees.length; i++) {
  employee.prototype.calculateSalary();
  // console.log(this.Salary)
  employees[i].render();
}
