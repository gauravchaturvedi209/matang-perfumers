import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51KUvg7SHzXsFDobLL7OA3wwD52GpdNuYEX0iIO5VwIejcAnUENUhwNzVmQ1VQtmpZh3znHioNTV8YQRHbEuh9Kd000epWn1cnA"

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout 
      label="Pay Now"
      name="Matang Perfumer"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;

// "Please use following creditcard for card payment"
// 4242 4242 4242 4242 --- Exp:01/20 --- cvv:123