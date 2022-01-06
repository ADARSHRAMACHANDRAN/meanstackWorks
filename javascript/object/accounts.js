var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//   total number of accnts
// console.log(accounts.length);

// print savings accnt numbers
// accounts.filter(acc=>acc.ac_type=="savings").forEach(data=>console.log(data.acno))

// print account number1000 balance

// let bal=accounts.find(acc=>acc.acno==1001).balance
// console.log(bal);


// print the gpay transactions
// accounts.map(data=>data.transactions).flat().filter(acc=>acc.method=="g-pay").forEach(det=>console.log(det))


// transactions to 1002
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002).forEach(det=>console.log(det))


// print highest balance accnt
// let highbal=accounts.sort((b1,b2)=>b2.balance-b1.balance)
// console.log(highbal[0]);

// print transaction history of 1002
 var debit=accounts.find(data=>data.acno==1002).transactions
//  console.log("debit transactions",debit);
var credit=accounts.map(data=>data.transactions).flat().filter(trans=>trans.to==1002)
// console.log("debit transactions"credit);

var history=[]
history.push("debit transactions :",debit)
history.push("credit transactions :",credit)
// console.log(history);
var transHistory={"debit transactions":debit,"credit transactions":credit}
console.log(transHistory);
