const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const unirest = require('unirest');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/mpesa', (req, res) => {
    const { phone, amount } = req.body;

    // Ensure phone and amount are provided
    if (!phone || !amount) {
        return res.status(400).send('Phone number and amount are required.');
    }

    // Define MPesa request
    let mpesaReq = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
        .headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer  8V7nsPxTeWslTBdryo2dnLO7YAVU'
        })
        .send(JSON.stringify({
            "BusinessShortCode": 247247,
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNjIxMDUyMTIw",
            "Timestamp": "20240621052120",
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": phone,
            "PartyB": 247247,
            "PhoneNumber": phone,
            "CallBackURL": "https://mydomain.com/path",
            "AccountReference": "REMAYA org",
            "TransactionDesc": "Donation for REMAYA"
        }))
        .end(response => {
            if (response.error) {
                console.error('Error:', response.error);
                console.error('Full response:', response.body);
                return res.status(500).send('Transaction failed. Please try again.');
            }
            res.send(response.raw_body);
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
