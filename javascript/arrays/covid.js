var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
// var highpos= coivd_data.reduce((cov1,cov2)=>cov1[2]>cov2[2]?cov1:cov2)
// console.log(highpos);

// // q2 district with higest 1 dose vaccination rate
// var highdose=coivd_data.reduce((cov1,cov2)=>cov1[5]>cov2[5]?cov1:cov2)
// console.log(highdose);

// q3 district with lowest death cases
// var highdeath=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
// console.log(highdeath);

// q4 sort district with +ve cases
// var sortdist=coivd_data.sort((d1,d2)=>d1[2]-d2[2])
// console.log(sortdist);

// q5 sort the districts based on 1st dose
// var sortdo=coivd_data.sort((d1,d2)=>d1[5]-d2[5])
// console.log(sortdo);

// q6 is there any states with +ve cases > 60000
// var case_60k=coivd_data.some(cov=>cov[2]>60000)
// console.log(case_60k);

// q7 print trissur details
// var tsr=coivd_data.filter(d=>d[1]="thrissur")
// console.log(tsr);

// q8 total nu,ber of +ve cases
// var totcase=coivd_data.map(d=>d[2]).reduce((c1,c2)=>c1[2]+c2[2])
// console.log(totcase);

// q9 total number of cured cases
// var cucase=coivd_data.map(d=>d[4]).reduce((c1,c2)=>c1+c2)
// console.log(totcase);

// q10 cured numbers of iduky
var cured=coivd_data.find(c=>c[1]=="iduky")[4]
console.log(cured);

// q11 total number of death cases
// var deathtot=coivd_data.map(d=>d[3]).reduce((dc1,dc2)=>dc1+dc2)
// console.log(deathtot);