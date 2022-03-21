function avalidate() {
    let amount = document.getElementById("amount").value;
    if (parseInt(amount == 0)) {
      alert(" Amount cannot be zero");
    } else if (parseInt(parseInt(amount)) == " ") {
      alert(" Amount cannot be empty");
    } else if (parseInt(amount) < 5000) {
      alert(" Amount cannot be less than 5000 ");
    } else {
      alert(" Account Opened ");
      alert(amount);
      document.getElementById('balance').innerText = amount;
      document.getElementById("amount").value="";
    }
    // var amountNew = document.getElementById('amount');
    // amountNew.innerHTML = parseInt(amount);
  }


  function wValidate() {
    // var balance = 5000;
    let balance = document.getElementById('balance').innerText;
    let withdrawAmount = document.getElementById("wihdrawAmount").value;
    let remainingBalance = balance -withdrawAmount;
    if (parseInt(withdrawAmount) <= balance) {
      
      alert(" Amount withdrawn successfully ");
      document.getElementById('balance').innerText = remainingBalance;
      document.getElementById("input").value="";

    } else {
      alert(" Amount insufficient !!!! ");
    }
    
  }

  function dValidate() {
      let balance = document.getElementById(' balance').innerText;
    let depositeAmount = document.getElementById("depositeAmount").value;
    let totalBal = parseInt(balance) + parseInt(depositeAmount);
    if (depositeAmount == 0) {
      alert(" Zero amount cannot be taken");
      //alert(amount);
    } else if (depositeAmount > 0){
        document.getElementById('balance').innerText = totalBal;
        document.getElementById("depositeAmount").value="";
      alert(" Added to Balance " +" Remaining balance is "+ totalBal);
    }
  }

  function myFunction() {
    // document.getElementById("borderDiv").style.border = "thin dotted red";
  }