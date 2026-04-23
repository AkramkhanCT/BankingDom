document.getElementById("Depositbutton")
.addEventListener("click", function() {

 // deposit section //   
   
const depositInput = document.getElementById("depositinput");
const depositInputValue = depositInput.value;

if (depositInputValue === '') {
  alert("deposit field must not be empty !")
} else {

  const depositAmount = document.getElementById("depositamount");

const depositAmountText = depositAmount.innerText;
 
const depositAmountCalculation = parseFloat(depositInputValue) + parseFloat(depositAmountText);
depositAmount.innerText = depositAmountCalculation;


 // clear input field//
 depositInput.value = "";

 // Total balacne section //
 
 const totalbalance = document.getElementById("total_balance")
 const totalBalanceText = totalbalance.innerText;
 totalbalance.innerText = parseFloat(depositInputValue) + parseFloat(totalBalanceText);


};


});


 // Withdraw section // 
 document.getElementById("withdrawbutton").
  addEventListener('click', function() {
    const withdrawInput = document.getElementById("withdrawinput");
    const withdrawInputValue = withdrawInput.value;

    if (withdrawInputValue ==='') {
      alert("Withdraw field must not be empty")
    } else{

       const withdrawAmount = document.getElementById
    ("withdrawamount");
    withdrawAmounText = withdrawAmount.innerText;

    const withdrawAmountCalculation = parseFloat
    (withdrawInputValue) + parseFloat(withdrawAmounText);

    withdrawAmount.innerText = parseFloat(withdrawInputValue);
    




     // Total balacne section //
 
 const totalbalance = document.getElementById("total_balance")
 const totalBalanceText = totalbalance.innerText;
 
 totalbalance.innerText = parseFloat(totalBalanceText)-
  withdrawAmountCalculation;
  
   withdrawInput.value = "";


    };

   
  });
