document.getElementById('mpesaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    // Prepend '254' to the phone number entered by the user
    const fullPhoneNumber = '254' + phone;

    fetch('http://localhost:3001/mpesa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: fullPhoneNumber,
            amount: amount
        })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        alert("Transaction successful!");
    })
    .catch(error => {
        console.log('Error:', error);
        alert("Transaction failed. Please try again.");
    });
});
