class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: { creditTransactions: [], debitTransactions: [] }
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: { creditTransactions: [], debitTransactions: [] }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: { creditTransactions: [], debitTransactions: [] }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: { creditTransactions: [], debitTransactions: [] }
        },

    }
    session = {}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }
    authanticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (password == pwd) {
                console.log("access granted");
                this.session["user"] = acno
            }
            else {
                console.log("incorrect password");
            }

        }
        else {
            console.log("invalid account number");
        }
    }
    getbalance(acno) {
        return this.accounts[acno].balance
    }
    balanceEnquiry() {
        if ("user" in this.session) {
            let logeduser = this.session["user"]
            console.log(this.getbalance(logeduser));
        }
        else {
            console.log("invalid session, ou must login");
        }
    }
    loginRequired(){
        return "user" in this.session?true:false
    }
    logeduser(){
        if(this.loginRequired()){
            return this.session["user"]

        }
    }
    fundTransfer(to_accno, amount) {
        if (this.loginRequired()) {
            if (this.validateAccountNumber(to_accno)) {
                let loggeduser=this.session["user"]
                let currentBal=this.getbalance[loggeduser]
                if (amount > currentBal) {
                    console.log("insufficient balance");
                }
                else {
                    this.accounts[loggeduser].balance-=amount
                    let from_balance=this.getbalance(loggeduser)
                    console.log(`your account hasbeen debited with ${amount}, your current balance is ${from_balance}`);

                    this.accounts[to_accno].balance+=amount
                    let to_balance=this.getbalance(to_accno)
                    console.log(`account number${to_accno} is credited with ${amount}, your current balance is ${to_balance}`);
                    console.log("TRANSACTION COMPLETED");

                    let cbtrans={from_account:this.loggeduser,amount:this.amount}
                    let dbtrans={to_account:to_accno,amount:amount}
                    this.accounts[loggeduser].transactions.debitTransactions.push(dbtrans)
                    this.accounts[to_accno].transactions.creditTransactions.push(cbtrans)
                    
                }
            }
            else{
                console.log("invalid account number");
            }
            
        }
        else{
            console.log("invalid session, you must log in ");
        }
    }
    creditTransactions(){
        let user=this.logeduser()
        this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))
            
    }
    debitTransactions(){
        let user=this.logeduser()
        this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))

    }
    transactionHistory(){
        let user=this.logeduser()
        console.log(this.accounts[user].transactions);
    }

}
var bank = new Bank()
// console.log(bank.validateAccountNumber(1000));
bank.authanticate(1000, "userone")
bank.fundTransfer(1001,2000)
bank.debitTransactions()
bank.transactionHistory()