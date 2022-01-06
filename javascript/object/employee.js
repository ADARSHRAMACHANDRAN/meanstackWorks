var employee={
    eid:1000,
    ename:"lal",
    salary:25000,
    desig:"developer",
    experience:2
}
// console.log(employee.desig);
// employee.experience="2years"
// console.log(employee);
if("experience" in employee){
    employee.experience+=1
}
else{
    employee.experience=2
}
console.log(employee);