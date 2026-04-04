type paymentMethod="UPI"|"CreditCard"|"Paypal"

function makePayment(payment:paymentMethod)
{
  return payment;
}

console.log(makePayment("CreditCard"));
