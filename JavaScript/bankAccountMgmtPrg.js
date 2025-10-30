class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  deposit(depositAmount) {
    if(depositAmount>0) {
      this.transactions.push({type:"deposit",amount:depositAmount})
      this.balance+=depositAmount
      return `Successfully deposited $${depositAmount}. New balance: $${this.balance}`
    }
    return `Deposit amount must be greater than zero.`
  }

  withdraw(withdrawAmount) {
    if ( withdrawAmount>0 && withdrawAmount <= this.balance) {
      this.transactions.push({type:"withdraw",amount:withdrawAmount})
      this.balance-=withdrawAmount
      return `Successfully withdrew $${withdrawAmount}. New balance: $${this.balance}`

    }
    return `Insufficient balance or invalid amount.`
  }

  checkBalance() {
    return `Current balance: $${this.balance}`
  }

  listAllDeposits() {
      let returnString = `Deposits: `
      const returnArr = this.transactions
      .filter(trans => {
        return trans.type ==="deposit"
      })
      .map (trans => {
        return trans.amount
      })

      return returnString+returnArr.join(",")
  }


  listAllWithdrawals() {
      let returnString = `Withdrawals: `
      const returnArr = this.transactions
      .filter(trans => {
        return trans.type ==="withdraw"
      })
      .map (trans => {
        return trans.amount
      })

      return returnString+returnArr.join(",")
  }
}

const myAccount = new BankAccount

myAccount.deposit(100)
myAccount.withdraw(40)
console.log(myAccount.withdraw(20))
myAccount.deposit(400)
myAccount.deposit(500)
console.log(myAccount.deposit(600))

console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())