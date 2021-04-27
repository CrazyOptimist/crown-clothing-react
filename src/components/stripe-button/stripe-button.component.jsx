import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import {
  STRIPE_PUBLIC_KEY,
  BACKEND_URL
} from '../../utils/constants';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    axios({
      url: `${BACKEND_URL}/payment`,
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        console.log(res);
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment. Please sure you use the right credit card.');
      })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://freesvg.org/img/USA-Flag-Sphere.png'
      discription={`Your total is $${price}`}
      amount={priceForStripe}
      pannelLabel='Pay Now'
      token={onToken}
      stripeKey={STRIPE_PUBLIC_KEY}
    />
  );
}

export default StripeCheckoutButton;
