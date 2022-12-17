function sendMoney(){

  // Send Money
  var inputName = document.getElementById("inputName").value;
  var inputAmount = parseInt(document.getElementById("inputAmount").value);
  var currentBalance = parseInt(document.getElementById("myBalance").innerText);

  if (inputAmount > currentBalance) {
    alert("Oops!! Seems like we have insufficient balance.")
  } else {
    var findUserBankAccount = inputName + "Balance";
    var myBalance = parseInt(document.getElementById("myBalance").innerText) - inputAmount;
    var netBalance = parseInt(document.getElementById(findUserBankAccount).innerHTML) + inputAmount;
    document.getElementById("myBalance").innerText = myBalance
    document.getElementById(findUserBankAccount).innerHTML = netBalance;
    alert(`Successful Transaction !! $${inputAmount} is sent to ${inputName}@email.com.`)

    // Transaction History
    var createPTag = document.createElement("li");
    var textNode = document.createTextNode(`$${inputAmount} is sent to customer with Email-id ${inputName}@email.com on ${Date()}.`);
    createPTag.appendChild(textNode);
    var element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
  }
}
