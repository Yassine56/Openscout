import React from 'react'
import { Heading } from '@chakra-ui/core'
import qs from 'query-string'
import { OnePagerData } from '../model/model'
import { ContentCard } from './ContentCard'

type OnePagerVideoProps = {
	onePagerData: OnePagerData
	isLoading: boolean
}

export const OnePagerVideo = ({ onePagerData, isLoading }: OnePagerVideoProps) => {
	let youTubeId = qs.parseUrl(onePagerData.pitchVideoLink).query.v
	console.log(youTubeId)
	return (
		<ContentCard title='Pitch Video' isLoading={isLoading}>
			<Heading as='h2' size='md' marginRight='10px'>
				<a href={onePagerData.pitchVideoLink} target='_blank'>
					Link to Pitch Video
				</a>
				<div
					className='video'
					style={{
						position: 'relative',
						paddingBottom: '56.25%' /* 16:9 */,
						paddingTop: 25,
						height: 0,
					}}
				>
					<iframe
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
						}}
						src={`https://www.youtube.com/embed/${youTubeId}`}
						frameBorder='0'
					/>
				</div>
			</Heading>
		</ContentCard>
	)
}
