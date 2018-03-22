import reducer from './reducer'
import {actionType} from './actions'

describe('calculator reducer', () => {
	it('to return the initial state', () => {
		expect(reducer()).toEqual({
			value: ''
		})
	})

	it('to return state on unknown action', () => {
		const state = {test: 'state'}
		expect(reducer(state)).toBe(state)
	})

	it('to change value to 4 on input', () => {
		const state = {value: ''}
		const action = {
			type: actionType.input,
			key: '4'
		}
		expect(reducer(state, action)).toEqual({
			value: '4'
		})
	})
})
