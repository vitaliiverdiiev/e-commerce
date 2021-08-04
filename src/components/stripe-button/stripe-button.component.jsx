import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JKiS2GSxboIfR2RSQEnWpp2KBWQikhoyg4vRZG2P4ejoeymnbQXhlG64z6olBwIy7IoAMl62wDepPLarFYb3ZfK00PIquqJOl";

  const onToken = (token) => {
    console.log("TOKEN:", token);
    alert("PAYMENT SUCCESSFUL");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce Europe Ltd."
      billingAddress
      shippingAddress
      //   image="../assets/images/logo/logo.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
