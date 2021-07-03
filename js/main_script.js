//Login button event handler 

const loginBtn = document.querySelector('.enterBtn');
loginBtn.addEventListener("click", function (event) {
     const loginPage = document.querySelector ('.loginArea');
     loginPage.style.display = "none";

     const frontPage = document.querySelector(".frontPage");
     frontPage.style.display = "block";
})


/* ******************************************************************************************************* */
//deposit button event handler 
var depositBtn = document.querySelector('.deposit-btn');
depositBtn.addEventListener('click', function (event) {
    var amountOfDepositNumber = numberMaker('depositAmount');

     spanTextUpdate('currentDeposit', amountOfDepositNumber);
    spanTextUpdate('currentBalance', amountOfDepositNumber);

    document.getElementById('depositAmount').value = '0';
})



//withdraw button handler
var withdrawBtn = document.querySelector('.withdraw-btn');
withdrawBtn.addEventListener('click', function (event) {
    var amountOfWithdrawNumber = numberMaker('withdrawAmount');

    spanTextUpdate('currentWithdraw', amountOfWithdrawNumber);
    spanTextUpdate('currentBalance', -1 * amountOfWithdrawNumber);
    
    document.getElementById('withdrawAmount').value = '0';
})




//function
function spanTextUpdate(id, amountNumber) {
        var currentBalance = document.getElementById(id).innerText;
    var currentBalanceNumber = parseFloat(currentBalance);
    var totalBalance = currentBalanceNumber + amountNumber;
    document.getElementById(id).innerText = totalBalance;
    }

function numberMaker(id) {
     var amount = document.getElementById(id).value;
    var amountNumber = parseFloat(amount);
    return amountNumber;
}
























// for my better understanding in begging level

//using function
    // var currentDeposit = document.getElementById('currentDeposit').innerText;
    // var currentDepositNumber = parseFloat(currentDeposit);
    // var totalDeposit = currentDepositNumber + amountOfDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

//balance section=>using function
    
    // var currentBalance = document.getElementById("currentBalance").innerText;
    // var currentBalanceNumber = parseFloat(currentBalance);
    // var totalBalance = currentBalanceNumber + totalDeposit;
    // document.getElementById('currentBalance').innerText = totalBalance;