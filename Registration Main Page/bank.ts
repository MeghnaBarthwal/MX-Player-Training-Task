interface bank {
  openAccount(money: number): any;
  withdrawAmount(money: number): any;
  depositeAmount(money: number): any;
  noAccount(money: number): any;
}

class bankApp implements bank {
  private amount: number;
  private wAmount: number;
  private dAmount: number;
  private money: number;

  openAccount(amount: number) {
    this.money = amount;
    console.log(" Account is Opened ");
  }

  noAccount(amount: number) {
    this.amount = 0;
    console.log(" Account cannot be created");
  }

  withdrawAmount(wAmount: number) {
    if (this.wAmount <= this.money) {
      this.money -= wAmount;
      console.log(
        " Amount is withdrawn " + " Remaining balance is : " + this.money
      );
    } else {
      console.log(" Amount is Insufficient to withdraw ");
    }
  }

  depositeAmount(dAmount: number) {
    this.money += dAmount;
    console.log(" Amount Deposited, Balance is " + this.money);
  }

  constructor() {
    let btn = document.getElementById(" button1 ");
    btn.addEventListener(" click ", (e: Event) => this.openAccount(5000));

    let btn2 = document.getElementById(" button2 ");
    btn.addEventListener(" click ", (e: Event) => this.withdrawAmount(6000));

    let btn3 = document.getElementById(" button3 ");
    btn.addEventListener(" click ", (e: Event) => this.depositeAmount(1000));
  }
}

// var obj = new bankApp();

// obj.openAccount(5000);
// obj.withdrawAmount(6000);
// obj.depositeAmount(1000);
