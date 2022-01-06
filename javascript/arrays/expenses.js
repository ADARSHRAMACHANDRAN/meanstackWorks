"use strict"
var expenses=[20000,25000,30000,35000,15000,20000]
//for(let i=0;i<=expenses.length;i++){
   // console.log(expenses[i]);
//}


//for(let amount of expenses){
 //   console.log(amount);
//}


//exnses greater than 20000
//for(let amount of expenses){
//    if(amount>20000){
//    console.log(amount);
  //  }
//}

//total expenses
//var total=0;
//for(let amount of expenses){
//    total+=amount;
//}
//console.log(total);

//max expense
//var max=0;
//for(let amount of expenses){
//    if(amount>max){
//    max=amount;
//    }
//}
//console.log("maximum expense=",max);


//minimum expense
//var mini=expenses[0];
//for(let amount of expenses){
//    if(amount<mini){
//        mini=expenses
//    }
//}
//console.log("minimum expense=",mini);

//duplicate
//var st=new Set();
//for(let amount of expenses){
//    st.add(amount)
//}
//console.log(st);

// pushing unique values into another array
var unique=[]
for(let amount of expenses){
    if(unique.includes(amount)){
    }
    else{
        unique.push(amount)
    }
}
console.log(unique);
