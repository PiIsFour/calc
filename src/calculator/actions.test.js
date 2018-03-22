import {input, actionType} from './actions'

describe('actions', () => {
	it('has an input action', () => {
		const key = 'teststring'
		expect(input(key)).toEqual({
			type: actionType.input,
			key
		})
	})
})
