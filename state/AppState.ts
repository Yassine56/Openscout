import { atom } from 'recoil'

export const testState = atom({
	key: 'testState',
	default: 'test state here',
})

export const visitedLinks = atom({
	key: 'visitedLinks',
	default: [],
})
