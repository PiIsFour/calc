import {actionType} from './actions'

const initialState = {
	value: ''
}

function inputNumber ({value, stack}, number) {
	if (value === '' && number === '0') {
		return {value, stack}
	}
	if (stack && stack[0].operation === 'RESULT') {
		return {
			value: value + number,
			stack: undefined
		}
	}
	return {
		value: value + number,
		stack
	}
}

function isCompressable (operation, newOperation) {
	if (newOperation === 'RESULT') {
		return true
	}
	return false
}

function compressOperation (latestItem, newItem) {
	switch (latestItem.operation) {
	case 'PLUS':
		return {
			value: latestItem.value + newItem.value,
			operation: newItem.operation
		}
	default:
	}
	return null
}

function compressAddStack ([latestItem, ...restStack], newItem) {
	if (!latestItem) {
		return [newItem]
	}
	if (isCompressable(latestItem.operation, newItem.operation)) {
		return compressAddStack([...restStack], compressOperation(latestItem, newItem))
	}
	return [newItem, latestItem, ...restStack]
}

function applyOperation (state, operation) {
	return {
		value: '',
		stack: compressAddStack(state.stack || [], {
			value: parseFloat(state.value),
			operation
		})
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
		case 'plus':
			return applyOperation(state, 'PLUS')
		case 'enter':
			return applyOperation(state, 'RESULT')
		default:
		}
		break
	default:
	}
	return state
}
