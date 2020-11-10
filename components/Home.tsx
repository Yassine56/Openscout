import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Box, Heading, Text, Divider } from '@chakra-ui/core'

import { Header } from './Header'
import { getAllPublicOnePagerData } from '../data/dataService'
import { OnePagerPublicData } from '../model/model'
import useLocalStorage from '../hooks/useLocalStorage'
import OnePagerPlans from './OnePagerPlans'
import StripeWrapper from './StripeWrapper'

/** Renders the home component. */
export const Home = () => {
	const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState([])

	// React hook to load data on first render
	React.useEffect(() => {
		getAllPublicOnePagerData().then((result) => {
			setOnePagers(result)
		})
	}, [])

	return (
		<Box>
			<Head>
				<title>One Pager Alpha</title>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<Header />

			<Box d='flex' justifyContent='center'>
				<Box w='xl'>
					<Heading as='h1' size='xl'>
						Welcome to One Pager Alpha 2.0!
					</Heading>

					<Heading as='h2' size='md'>
						View active OnePagers
					</Heading>

					<Divider />

					<OnePagerLinks onePagers={onePagers} />
				</Box>
			</Box>
		</Box>
	)
}

type OnePagerLinksProps = {
	onePagers: OnePagerPublicData[]
}

const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {
	const [linksVisited, setLinksVisited] = useLocalStorage('visitedLinks', [])
	const [didUserPay, setUserPay] = useLocalStorage('didUserPay', false)
	const [showPlans, setShowplans] = useState(false)
	const [showPaymentForm, setShowPaymentForm] = useState(false)
	const router = useRouter()
	const handleClick = (e) => {
		e.preventDefault()
		if (didUserPay) {
			router.push(e.target.id)
		} else {
			if (linksVisited.includes(e.target.id)) {
				router.push(e.target.id)
			} else {
				if (linksVisited.length < 2) {
					setLinksVisited([...linksVisited, e.target.id])
					router.push(e.target.id)
				} else {
					console.log('showPlans', showPlans)
					setShowplans(true)
				}
			}
		}
	}
	return (
		<div>
			{onePagers.map((onePagerData: OnePagerPublicData) => (
				<Box key={onePagerData.companyName} marginBottom='10px'>
					{/* <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}></Link> */}
					<a onClick={handleClick} id={`/${onePagerData.url}`}>
						{onePagerData.companyName}{' '}
					</a>

					<Text margin='0'>{onePagerData.briefDescription}</Text>
				</Box>
			))}
			{showPlans && (
				<OnePagerPlans
					isOpen={showPlans}
					setIsOpen={setShowplans}
					setShowPaymentForm={setShowPaymentForm}
				/>
			)}
			{showPaymentForm && (
				<StripeWrapper isOpen={showPaymentForm} setIsOpen={setShowPaymentForm} />
			)}
		</div>
	)
}
