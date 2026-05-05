// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  //   private userBalance: number; // privet thakle ei class e acces korte parbe
  protected userBalance: number; //protected e  thakle ei class e acces korte parbe and onno child class eo access korte parbo

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mezbaVaiAccount = new BankAccount(101, "mezba", 2000);

mezbaVaiAccount.addBalance(100);
console.log(mezbaVaiAccount);
