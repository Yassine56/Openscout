import React from 'react'
import { Heading } from '@chakra-ui/core'
import { SimpleGrid } from '@chakra-ui/core'
import { OnePagerData } from '../model/model'
import { ContentCard } from './ContentCard'
import { Progress } from '@chakra-ui/core'

type OnePagerFinancesProps = {
	onePagerData: OnePagerData
	isLoading: boolean
}

/** Renders the Finances card. */
export const OnePagerFinances = ({ onePagerData, isLoading }: OnePagerFinancesProps) => {
	// Format a number to include a dollar sign. This function
	// will be improved as part of task 2.
	const formatFinanceNumber = (financeNumber: number) => {
		return (
			financeNumber &&
			'$' + financeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		)
	}

	return (
		<ContentCard title='Finances' isLoading={isLoading}>
			<SimpleGrid columns={2} spacing={10}>
				<Heading as='h1' size='lg' marginRight='10px'>
					Funding Stage:
				</Heading>
				<Heading as='h2' size='lg' marginRight='10px'>
					{onePagerData.fundraisingStage}
				</Heading>

				<SubHeading>Funds Raised:</SubHeading>
				<div>
					<p>{formatFinanceNumber(onePagerData.fundsRaisedInStage)}</p>
					<Progress
						value={
							(onePagerData.fundsRaisedInStage / onePagerData.fundraisingStageGoal) * 100
						}
					/>
				</div>

				<SubHeading>Funding Goal:</SubHeading>
				<p>{formatFinanceNumber(onePagerData.fundraisingStageGoal)}</p>

				<SubHeading>Fundraising Details:</SubHeading>
				<p> {onePagerData.fundraisingDetails}</p>
			</SimpleGrid>
		</ContentCard>
	)
}

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
	<Heading as='h2' size='md' marginRight='10px'>
		{children}
	</Heading>
)
