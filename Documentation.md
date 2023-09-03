# Payment Method
#### GET https://backend-meli.up.railway.app/PaymentMethod/paymentMethodList
## List
##### Example Output

```Json
200 OK
[
    {
        "cardType": "Visa",
        "cardNumber": "123456789123456",
        "expirationDate": "11/2027",
        "securityCode": "234",
        "billingAddress": "LK-987-ST-12",
        "account": null,
        "id": 1
    },
    {
        "cardType": "AmericanExpress",
        "cardNumber": "523456789123459",
        "expirationDate": "09/2030",
        "securityCode": "723",
        "billingAddress": "FK-987-ST-19",
        "account": null,
        "id": 5
    }
]
```

## Create
#### POST https://backend-meli.up.railway.app/PaymentMethod/createPaymentMethod
##### Example Input
```Json
{
    "cardType": "Mastercard",
    "cardNumber": "123456789124456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null
}
```
##### Example Output
```Json
201 CREATED
{
    "cardType": "Mastercard",
    "cardNumber": "123456789124456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 11
}
```

## Modify
### PUT https://backend-meli.up.railway.app/PaymentMethod/modifyPaymentMethod
##### Example Input
```Json
{
    "cardType": "AmericanExpress",
    "cardNumber": "523456789123459",
    "expirationDate": "09/2030",
    "securityCode": "723",
    "billingAddress": "FK-987-ST-19",
    "account": null,
    "id": 5
}
```
##### Example Output
```Json
201 CREATED
{
    "cardType": "AmericanExpress",
    "cardNumber": "523456789123459",
    "expirationDate": "09/2030",
    "securityCode": "723",
    "billingAddress": "FK-987-ST-19",
    "account": null,
    "id": 5
}
```

## Consult By ID
#### GET https://backend-meli.up.railway.app/PaymentMethod/consultPaymentMethod/1
##### Example Output
```Json
200 OK
{
    "cardType": "Visa",
    "cardNumber": "123456789123456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 1
}
```

## Delete By ID
#### DELETE https://backend-meli.up.railway.app/PaymentMethod/deletePaymentMethod/3
##### Example Output
```Json
200 OK
{
    "cardType": "Mastercard",
    "cardNumber": "123456789123456",
    "expirationDate": "11/2027",
    "securityCode": "234",
    "billingAddress": "LK-987-ST-12",
    "account": null,
    "id": 3
}
```







