document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw');

    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('Withdraw-amount');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // Total
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

    // Calculate New Banalce 

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // console.log(previousBalanceTotal)


    // CLear the field

    withdrawField.value = '';

});


