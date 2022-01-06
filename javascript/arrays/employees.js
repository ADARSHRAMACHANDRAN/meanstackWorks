var employees=[
    [1000,"ram",35000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1990,2005],
    [1002,"arya",13000,"developer",2000,2010],
    [1003,"vivek",11000,"developer",1998,2015],
    [1004,"deepak",18000,"mrkt",1995,2000],
    [1005,"john",30000,"ba",1991,2015],
    [1006,"viljo",14000,"ba",1999,2010]

]

//print developers details
//for(let employee of employees){
//    if(employee[3]=="developer"){
//        console.log(employee);
//    }
//}

//print the the experience of each employees

//for(let employee of employees){
//    console.log(employee[5]-employee[4]);

//}

//second heighest sal
// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2])

//min sal
// console.log(employees[employees.length-1][2]);

// highest sal among developers
// var developer_details=[];
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         developer_details.push(employee)
//     }
// }
// developer_details.sort((d1,d2)=>d2[2]-d1[2])
// console.log(developer_details[0][2]);

// print employees names starting with a
// for(let employee of employees){
//     if(employee[1][0]=="A" || employee[1][0]=="a"){
//         console.log(employee);
//     }
// }

// for(let emp of employees){
//     if(emp[4]>2009 && emp[5]<2016){
//         console.log(emp);
//     }
// }

//map
// //employee names
// var emp_name=employees.map(emp=>emp[1])
// console.log(emp_name);

// list all employee sal

// var emp_sal=employees.map(sal=>sal[2])
// console.log(emp_sal);

// filter()

var developer=employees.filter(dev=>dev[3]=="developer")
console.log(developer);