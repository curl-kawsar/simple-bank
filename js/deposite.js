// Step - 1 : listener Add
// Deposite Button Part
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('Deposite');

    // step - 2 : get the deposite Amount
    const depositeField = document.getElementById('user-deposite');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);


    // Step 3 - Get the deposiite Current
    // For None inpt use innerText to get the text
    const deposiiteTotalElement = document.getElementById('deposite-amount');
    const previouseDeposiiteTotalString = deposiiteTotalElement.innerText;
    const previouseDeposiiteTotal = parseFloat(previouseDeposiiteTotalString);
    const currentTotal = previouseDeposiiteTotal + newDepositeAmount;
    deposiiteTotalElement.innerText = currentTotal;

    // console.log(depositeAmount);

    // Total Balance

    const currentTotalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = currentTotalBalanceElement.innerText;
    const previouseBalanceTotal = parseFloat(previousTotalBalanceString);


    // Calculate Balance

    const currentTotalBalance = previouseBalanceTotal + newDepositeAmount;
    currentTotalBalanceElement.innerText = currentTotalBalance;



    depositeField.value = '';

});
