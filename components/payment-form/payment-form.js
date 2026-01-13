// payment-form.js
import React, { useState } from 'react';

import 'components/styles/payment-form.scss';

import iconCreditCard from 'images/icons/icon-credit-card.svg';
import iconPayPal from 'images/icons/paypal-inactive-dark.svg';
import iconCreditCardTypes from 'images/icons/credit-card-icons.png';

import PresetsCustomAmounts from './presets-custom-amounts';

const PaymentForm = () => {
  // Lifted State: Default to $5
  const [selectedAmount, setSelectedAmount] = useState(5);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting payment for: $', selectedAmount);
    // Add your Stripe/Payment logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='control-group radios'>
        <legend>Donate to support local sites</legend>
        <PresetsCustomAmounts
          amounts={[3, 5, 10]}
          selectedOption={selectedAmount}
          setSelectedOption={setSelectedAmount}
        />
      </fieldset>

      <div className='payment-buttons'>
        <h3>Payment Method</h3>
        <div>
          <button type='button' className='payment-button active'>
            <img alt='Credit card' width='25px' src={iconCreditCard} />
            <span>Credit card</span>
          </button>
          <button type='button' className='payment-button'>
            <img alt='PayPal' width='50px' src={iconPayPal} />
          </button>
        </div>
      </div>

      <div className='payment-fields'>
        <div className='control-group'>
          <label htmlFor='name' className='visually-hidden'>
            Cardholder name
          </label>
          <input type='text' name='name' id='name' placeholder='Name' required />
        </div>
        <div className='control-group'>
          <div className='media-img-after'>
            <img
              src={iconCreditCardTypes}
              style={{ width: '127px', height: '20px' }}
              aria-hidden='true'
              alt='Card types'
            />
            <label htmlFor='cc-number' className='visually-hidden'>
              Credit Card Number
            </label>
            <input
              type='number'
              name='cc-number'
              id='cc-number'
              placeholder='Credit card number'
              required
            />
          </div>
        </div>
        <div className='control-group row'>
          <div>
            <label htmlFor='expiry' className='visually-hidden'>
              Expiration
            </label>
            <input type='text' name='expiry' id='expiry' placeholder='Month/Year' required />
          </div>
          <div>
            <label htmlFor='cvc' className='visually-hidden'>
              CVC Code
            </label>
            <input type='text' name='cvc' id='cvc' placeholder='CVC' maxLength='4' required />
          </div>
        </div>
        <div className='control-group'>
          <label htmlFor='phone-number' className='visually-hidden'>
            Phone Number
          </label>
          <input type='number' name='number' id='number' placeholder='Phone number' />
        </div>
        <div className='control-group'>
          <button type='submit' className='btn-pay'>
            {/* The button now reflects the state! */}
            <span className='text'>Pay ${selectedAmount || 0}</span>
            <span className='icon-lock'></span>
          </button>
        </div>
        <p className='subhead'>
          Secure payment processing by <a href='https://stripe.com'>Stripe</a>.
        </p>
      </div>
    </form>
  );
};

export default PaymentForm;
