/*
* Loan calculator that shows payment-by-payment breakdown
*/
const loanAmount = document.createElement('div');
loanAmount.innerHTML = 'Loan Amount: $';
const loanAmountInput = document.createElement('input');
loanAmountInput.id = 'loanAmountInput';
const interestRate = document.createElement('div');
interestRate.innerHTML = 'Interest Rate: ';
const interestRateInput = document.createElement('input');
interestRateInput.id = 'interestRateInput';
const loanTerm = document.createElement('div');
loanTerm.innerHTML = 'Loan Term (years): ';
const loanTermInput = document.createElement('input');
loanTermInput.id = 'loanTermInput';
const calculateButton = document.createElement('button');
calculateButton.innerHTML = 'Calculate';
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
//adds objects to HTML
document.body.appendChild(loanAmount);
document.body.appendChild(loanAmountInput);
document.body.appendChild(interestRate);
document.body.appendChild(interestRateInput);
document.body.appendChild(loanTerm);
document.body.appendChild(loanTermInput);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(calculateButton);
document.body.appendChild(resetButton);
//This is where the magic happens
calculateButton.onclick = function() {
  reset();
  const loanAmount = document.getElementById('loanAmountInput').value;
  const interestRate = document.getElementById('interestRateInput').value;
  const loanTerm = document.getElementById('loanTermInput').value;
  //turns input into easier to calculate values
  let r = interestRate/12/100;
  let t = loanTerm*12;
  //Amortization equation
  let monthlyPayment = loanAmount *(r)* Math.pow((1+r),t)/(Math.pow((1+r), t)-1);
  let remainingBalance = loanAmount;
  let paymentNumber = 1;
  let totalPayment = 0;
  let totalInterest = 0;
  let payTable = document.createElement("TABLE");
  payTable.id = 'table';
  while (remainingBalance > 0.001) {
    totalInterest+=remainingBalance * (1 + r)-remainingBalance;
    remainingBalance=remainingBalance * (1 + r)-monthlyPayment;
    //prevents less than .01 cent overpayment showing up as negative number
    if(remainingBalance<0) remainingBalance=0;
    totalPayment+=monthlyPayment;
    //creates and formats each row
    let row = payTable.insertRow(-1);
    let payNum = row.insertCell(0);
    let balanceNum = row.insertCell(1);
    let interestNum = row.insertCell(2);
    let totalPayNum = row.insertCell(3);
    payNum.innerHTML = `Payment #${paymentNumber}: \$${monthlyPayment.toFixed(2)}<br>`;
    balanceNum.innerHTML = `Remaining Balance: \$${remainingBalance.toFixed(2)}<br>`;
    interestNum.innerHTML = `Total interest: \$${totalInterest.toFixed(2)}<br>`;
    totalPayNum.innerHTML = `Total Paid: \$${totalPayment.toFixed(2)}<br>`;
    paymentNumber++;
  }
  document.body.append(payTable);
};
//create reset button functionality
resetButton.onclick = function() {
      reset();
};
//allows reset to active on reset button or calculate button
function reset(){
  if(document.getElementById('table')!=null) document.body.removeChild(document.getElementById('table'));
}