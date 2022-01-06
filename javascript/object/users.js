var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:{creditTransactions:[],debitTransactions:[]}},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:{creditTransactions:[],debitTransactions:[]}},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:{creditTransactions:[],debitTransactions:[]}},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:{creditTransactions:[],debitTransactions:[]}},

}

// // 1003 name 
// console.log(users[1003].personName);

// // 1005 exist or not 
// console.log(1005 in users);

// // balance of 1001
// console.log(users[1002].balance);



// function authenticate(acc_no,password){
//     if(acc_no in users){
//         let pwd=users[acc_no].password
//         if(pwd==password){
//             return 1   //access granted
//         }
//         else{
//             return -1  //incorrect password
//         }
//     }
//     else{
//         return 0    //incorrect aacount number
//     }

// }  
//   console.log(authenticate(1007,"userfour"));


function validateAccno(acno){
    return acno in users?true:false
}
function fundTransfer(from_accno,to_accno,amount){
    if(validateAccno(from_accno) && validateAccno(to_accno)){
       let bal=users[from_accno].balance
       if(amount>bal){
           console.log("insuffient balance");
       }
       else{
            users[from_accno].balance-=amount
            let from_acno_balance=balanceamount(from_accno)
            console.log(`your account ${from_accno} hasbeen credited with ${amount}. your available balance is ${from_acno_balance}` );

            users[to_accno].balance+=amount
            let to_acno_balance=balanceamount(to_accno)
            console.log(`your account ${from_accno} hasbeen debited with ${amount}. your available balance is ${to_acno_balance}`);

            let crTrans={from:from_accno,amount:amount}
            let dbTrans={to:to_accno,amount:amount}
            users[to_accno].transactions.creditTransactions.push(crTrans)
            users[from_accno].transactions.debitTransactions.push(dbTrans)
            
    

       }
    }
    else{
        console.log("invalid account number");
    }
    console.log(users[from_accno].transactions);
}
 console.log(fundTransfer(1000,1001,2000));
 
 


function balanceamount(accno){
    if(validateAccno(accno)){
        return users[accno].balance;
    }
    else{
        console.log("invalid account number");
    }
}