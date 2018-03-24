import reducer from './reducer'
import {actionType} from './actions'

describe('calculator reducer', () => {
	it('to return the initial state', () => {
		expect(reducer()).toEqual({
			value: '',
			stack: [
				{
					value: 0,
					operation: 'RESULT'
				}
			]
		})
	})

	it('to return state on unknown action', () => {
		const state = {test: 'state'}
		expect(reducer(state)).toBe(state)
	})

	it('to change value to 4 on input', () => {
		const state = {
			value: '',
			stack: [
				{
					value: 0,
					operation: 'RESULT'
				}
			]
		}
		const action = {
			type: actionType.input,
			key: '4'
		}
		expect(reducer(state, action)).toEqual({
			value: '4',
			stack: [
				{
					value: 0,
					operation: 'RESULT'
				}
			]
		})
	})

	it('puts plus operation on the stack', () => {
		const state = {
			value: '4',
			stack: [
				{
					value: 0,
					operation: 'RESULT'
				}
			]
		}
		const action = {
			type: actionType.input,
			key: 'plus'
		}
		expect(reducer(state, action)).toEqual({
			value: '',
			stack: [
				{
					value: 4,
					operation: 'PLUS'
				}
			]
		})
	})

	it('adds the numbers on enter', () => {
		const state = {
			value: '3',
			stack: [
				{
					value: 2,
					operation: 'PLUS'
				}
			]
		}
		const action = {
			type: actionType.input,
			key: 'enter'
		}
		expect(reducer(state, action)).toEqual({
			value: '',
			stack: [
				{
					value: 5,
					operation: 'RESULT'
				}
			]
		})
	})

	it('overrides results when new operation is input', () => {
		const state = {
			value: '2',
			stack: [
				{
					value: 7,
					operation: 'RESULT'
				}
			]
		}
		const action = {
			type: actionType.input,
			key: 'plus'
		}
		expect(reducer(state, action)).toEqual({
			value: '',
			stack: [
				{
					value: 2,
					operation: 'PLUS'
				}
			]
		})
	})

	it('overrides last operation on stack if no number is input before', () => {
		const state = {
			value: '',
			stack: [
				{
					value: 2,
					operation: 'TIMES'
				},
				{
					value: 2,
					operation: 'PLUS'
				}
			]
		}
		const action = {
			type: actionType.input,
			key: 'plus'
		}
		expect(reducer(state, action)).toEqual({
			value: '',
			stack: [
				{
					value: 4,
					operation: 'PLUS'
				}
			]
		})
	})
})
