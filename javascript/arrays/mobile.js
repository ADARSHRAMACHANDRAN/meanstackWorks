var mobiles=[

    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],

    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],

    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],

    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],

    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],

    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],

    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],

    [1000,"one plus","nord 2",15000,"mediatek","LED","4G"],

 

   

]


// filter()

// mobiles under 25k

// var mob25k=mobiles.filter(mob=>mob[3]<25000)
// console.log(mob25k);

// mobiles between 25k and 30k

// var mob_bt_25k_30k=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
// console.log(mob_bt_25k_30k);

// list all 5g mobile names

// var mob_5g=mobiles.filter(mob=>mob[6]=="5G")
// console.log(mob_5g);
// lis all 5g mobiles under 25k
// list all smsung moble names whose band 4g and display amoled
// var mobs=mobiles.filter(mob=>mob[1]=="samsung" && mob[1]=="4g" && mob[5]=="AMOLED")
// console.log(mobs);

// reduce()

// var high=mobiles.reduce((mob1,mob2)=>mob1[3]>mob2[3]?mob1:mob2)
// console.log(high);

// var low=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(low);

// some()
// var mobfor10=mobiles.some(mob=>mob[3]==10000)
// console.log(mobfor10);

// var mobbt10_25=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(mobbt10_25);

// find()
var nameById=mobiles.find(mob=>mob[0]=1003)
console.log(nameById);