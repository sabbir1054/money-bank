//Login button event handler 

const loginBtn = document.querySelector('.enterBtn');
loginBtn.addEventListener("click", function (event) {
     const loginPage = document.querySelector ('.loginArea');
     loginPage.style.display = "none";

     const frontPage = document.querySelector(".frontPage");
     frontPage.style.display = "block";
})

var inputW=document.getElementById("inpu-withdraw");
inputW.addEventListener("keypress", function (event) {
     console.log(event.key)
})

//deposit button event handler 
var depositBtn = document.querySelector('.deposit-btn');
depositBtn.addEventListener('click', function (event) {
     var depositInput = document.querySelector('.deposit-input').value;
     var depositNumber = parseFloat(depositInput);
     var depositPast = document.querySelector('.total-deposit').innerText;
     var depositPastNumber = parseFloat(depositPast);
     var grandTotalDeposit = depositPastNumber + depositNumber;

     document.querySelector('.total-deposit').innerText = grandTotalDeposit;
     document.querySelector('.deposit-input').value = "";
//balance card
     var currentBalance = document.querySelector('.balance').innerText;
     var currentBalanceNumber = parseFloat(currentBalance);
     var grandBalance = currentBalanceNumber + grandTotalDeposit;

     document.querySelector('.balance').innerText = grandBalance;
})

//function








//withdraw button handler

     var withdrawBtn = document.querySelector(".withdraw-btn");
      withdrawBtn.addEventListener('click', function (event) {
     var withdrawInput = document.querySelector('.withdraw-input').value;
     var withdrawNumber = parseFloat(withdrawInput);
     var withdrawPast = document.querySelector('.withdraw').innerText;
     var withdrawPastNumber = parseFloat(withdrawPast);
     var grandTotalWithdraw = withdrawPastNumber + withdrawNumber;
           
           document.querySelector('.withdraw').innerText = grandTotalWithdraw;
           
     //balance card
     var currentBalance = document.querySelector('.balance').innerText;
     var currentBalanceNumber = parseFloat(currentBalance);
     var grandBalance = currentBalanceNumber - grandTotalWithdraw;
     document.querySelector('.balance').innerText = grandBalance;

     document.querySelector('.withdraw-input').value = "";

 })
