import React from 'react'
import {
	Modal,
	Button,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Stack,
	SimpleGrid,
	Box,
	Badge,
	Divider,
} from '@chakra-ui/core'

const OnePagerPlans = ({ isOpen, setIsOpen, setShowPaymentForm }) => {
	const onClose = () => {
		setIsOpen(false)
	}
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Pricing</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<SimpleGrid columns={5} spacing={1}>
							<div>
								<Plans
									type='standard'
									setShowPaymentForm={setShowPaymentForm}
									onClose={onClose}
								/>
							</div>
							<Divider orientation='vertical' />
							<div>
								<Plans
									type='premium'
									setShowPaymentForm={setShowPaymentForm}
									onClose={onClose}
								/>
							</div>
							<Divider orientation='vertical' />
							<div>
								<Plans
									type='custom'
									setShowPaymentForm={setShowPaymentForm}
									onClose={onClose}
								/>
							</div>
							<Divider orientation='vertical' />
						</SimpleGrid>
					</ModalBody>
					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

const Plans = ({ type, setShowPaymentForm, onClose }) => {
	const handleBuyClick = () => {
		// close Modal
		setShowPaymentForm(true)
		onClose()

		// open Payment form modal
	}
	return (
		<div>
			<Stack>
				<Badge variant='solid' variantColor='green'>
					Enabled
				</Badge>
				<span>feature 1</span>
				<Badge variant='solid' variantColor='green'>
					Enabled
				</Badge>
				<span>feature 2</span>
				<Badge
					variant={['premium', 'custom'].includes(type) ? 'solid' : 'outline'}
					variantColor='green'
				>
					{['premium', 'custom'].includes(type) ? 'Enabled' : 'Disabled'}
				</Badge>
				<span>feature 3</span>
				<Badge
					variant={['premium', 'custom'].includes(type) ? 'solid' : 'outline'}
					variantColor='green'
				>
					{['premium', 'custom'].includes(type) ? 'Enabled' : 'Disabled'}
				</Badge>
				<span>feature 4</span>
				<Badge variant={type === 'custom' ? 'solid' : 'outline'} variantColor='green'>
					{type === 'custom' ? 'Enabled' : 'Disabled'}
				</Badge>
				<span>feature 5</span>
				<Badge variant={type === 'custom' ? 'solid' : 'outline'} variantColor='green'>
					{type === 'custom' ? 'Enabled' : 'Disabled'}
				</Badge>
				<span>feature 6</span>
				<Button variantColor={'blue'} mr={3} onClick={handleBuyClick}>
					Buy {' ' + type}
				</Button>
			</Stack>
		</div>
	)
}

export default OnePagerPlans
