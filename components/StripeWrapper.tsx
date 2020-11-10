import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
const StripeWrapper = ({ isOpen, setIsOpen }) => {
	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

	return (
		<Elements stripe={stripePromise}>
			<PaymentForm isOpen={isOpen} setIsOpen={setIsOpen} />
		</Elements>
	)
}
export default StripeWrapper
