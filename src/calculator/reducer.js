import {actionType} from './actions'

const initialState = {
	value: ''
}

function inputNumber (state, number) {
	if (state.value === '' && number === '0') {
		return state
	}
	return {
		...state,
		value: state.value + number
	}
}

export default function reducer (state = initialState, action = {}) {
	switch (action.type) {
	case actionType.input:
		switch (action.key) {
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			return inputNumber(state, action.key)
		default:
		}
		break
	default:
	}
	return state
}
