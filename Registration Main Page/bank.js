var bankApp = /** @class */ (function () {
    function bankApp() {
    }
    bankApp.prototype.openAccount = function (amount) {
        this.money = amount;
        console.log(" Account is Opened ");
    };
    bankApp.prototype.noAccount = function (amount) {
        this.amount = 0;
        console.log(" Account cannot be created");
    };
    bankApp.prototype.withdrawAmount = function (wAmount) {
        if (this.wAmount <= this.money) {
            this.money -= wAmount;
            console.log(" Amount is withdrawn " + " Remaining balance is : " + this.money);
        }
        else {
            console.log(" Amount is Insufficient to withdraw ");
        }
    };
    bankApp.prototype.depositeAmount = function (dAmount) {
        this.money += dAmount;
        console.log(" Amount Deposited, Balance is " + this.money);
    };
    return bankApp;
}());
var obj = new bankApp();
obj.openAccount(5000);
obj.withdrawAmount(6000);
obj.depositeAmount(1000);
