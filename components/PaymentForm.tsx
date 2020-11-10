import React, { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
} from '@chakra-ui/core'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import useLocalStorage from '../hooks/useLocalStorage'

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: '#32325d',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: '#aab7c4',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	},
}

const PaymentForm = ({ isOpen, setIsOpen }) => {
	const [didUserPay, setUserPay] = useLocalStorage('didUserPay', false)
	const onClose = () => {
		setIsOpen(false)
	}
	const [error, setError] = useState(null)
	const stripe = useStripe()
	const elements = useElements()

	const handleChange = (event) => {
		if (event.error) {
			setError(event.error.message)
		} else {
			setError(null)
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const card = elements.getElement(CardElement)
		const result = await stripe.createToken(card)
		if (result.error) {
			// Inform the user if there was an error.
			setError(result.error.message)
		} else {
			setError(null)
			// Send the token to your server.
			console.log('result.token', result.token)
			const response = await (
				await fetch('/api/billing', {
					method: 'POST', // *GET, POST, PUT, DELETE, etc.
					mode: 'same-origin', // no-cors, *cors, same-origin
					headers: {
						'Content-Type': 'application/json',
					},
					redirect: 'follow', // manual, *follow, error
					referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
					body: JSON.stringify(result.token), // body data type must match "Content-Type" header
				})
			).json()

			if (response.success) {
				setUserPay(true)
				onClose()
			} else {
				// show some error message
			}
		}
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Payment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form onSubmit={handleSubmit}>
							<div className='form-row'>
								<label>Credit or debit card</label>
								<CardElement
									id='card-element'
									options={CARD_ELEMENT_OPTIONS}
									onChange={handleChange}
								/>
								<div className='card-errors' role='alert'>
									{error}
								</div>
							</div>
							<button type='submit'>Submit Payment</button>
						</form>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export default PaymentForm
