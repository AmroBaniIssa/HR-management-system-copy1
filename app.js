const employees=[]
function employee(
  EmployeeId,
  fullName,
  Department,
  Level,
  image_URL,
  Salary
) {
    this.Employee_Id=EmployeeId;
    this.fullName=fullName;
    this.Department=Department;
    this.Level=Level;
    this.img=image_URL;
    this.Salary=Salary;
    employees.push(this);
}

employee.prototype.talk=function(){
let salaryForSenior= Math.random()*(2000-1500)+1500;
console.log(salaryForSenior);
let salaryForMidSenior= Math.random()*(1500-1000)+1000;
console.log(salaryForMidSenior);
let salaryForJunior = Math.random()*(1000-500)+500;
console.log(salaryForJunior);
let taxForSenior= 0.07 * salaryForSenior
console.log(taxForSenior)
let taxForMidSenior= 0.07 * salaryForMidSenior ;
console.log(taxForMidSenior)
let taxForJunior= 0.07 * salaryForJunior
console.log(taxForJunior)

}
// employee.talk();
// console.log(e)
employee.prototype.talk()

employee.prototype.render=function(){

}
let employee1= new employee("1000","Ghazi Samer","Administration","Senior")
console.log(employees)