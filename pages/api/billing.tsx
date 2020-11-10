import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

let stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2020-08-27',
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const token = req.body

			const response = await stripe.charges.create({
				amount: 2000,
				currency: 'usd',
				source: token.id,
				description: 'My First Test Charge (created for API docs)',
			})
			if (response.status === 'succeeded') {
				return res.status(200).json({ success: true })
			} else return res.status(400).json({ success: false })
		} catch (err) {
			return res.status(500).json({ message: 'Internal server Error' })
		}
	} else {
		// Handle any other HTTP method
	}
}

export default handler
