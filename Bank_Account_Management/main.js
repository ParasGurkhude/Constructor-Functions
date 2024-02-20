function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Initially, all accounts are active
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Insufficient funds.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: $${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Create multiple BankAccount objects representing different accounts
let account1 = new BankAccount("1234567890", "Paras Gurkhude", "Savings", 1000);
let account2 = new BankAccount("9876543210", "Soham Shinde", "Checking", 500);
let account3 = new BankAccount("1111222233", "Hrutwik Tandale", "Savings", 2000);

// Perform a series of operations on the accounts
account1.deposit(500);
account2.withdraw(200);
account3.deposit(1000);
account1.withdraw(1500);

// Test the isActive method
console.log("Account 1 active status:", account1.isActive());
console.log("Account 2 active status:", account2.isActive());
console.log("Account 3 active status:", account3.isActive());

// Test the getTotalBalance function
let allAccounts = [account1, account2, account3];
console.log("Total balance of all active accounts:", getTotalBalance(allAccounts));