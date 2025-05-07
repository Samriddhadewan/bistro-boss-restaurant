import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckOuForm/CheckOutForm';
import {loadStripe} from '@stripe/stripe-js';




const stripePromise = loadStripe(import.meta.env.VITE_API_KEY);
const Payment = () => {
  return (
    <div>
        <SectionTitle
        heading="Payment"
        subHeading="Pay to eat"
        ></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    </div>
  )
}

export default Payment