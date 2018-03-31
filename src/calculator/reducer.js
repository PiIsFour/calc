import {actionType} from './actions'

const initialState = {
	value: '',
	stack: [
		{
			value: 0,
			operation: 'RESULT'
		}
	]
}

function inputNumber ({value, stack}, number) {
	if (value === '' && number === '0') {
		return {value, stack}
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
	if (operation === 'RESULT') {
		return true
	}
	if (newOperation === 'ADD') {
		return true
	}
	if (newOperation === 'SUB') {
		return true
	}
	if (operation === 'TIMES') {
		return true
	}
	if (operation === 'DIVIDE') {
		return true
	}
	return false
}

function compressOperation (latestItem, newItem) {
	if (latestItem.operation === 'RESULT') {
		return newItem
	}
	switch (latestItem.operation) {
	case 'ADD':
		return {
			value: latestItem.value + newItem.value,
			operation: newItem.operation
		}
	case 'SUB':
		return {
			value: latestItem.value - newItem.value,
			operation: newItem.operation
		}
	case 'TIMES':
		return {
			value: latestItem.value * newItem.value,
			operation: newItem.operation
		}
	case 'DIVIDE':
		return {
			value: latestItem.value / newItem.value,
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

function applyOperation ({value, stack: [latestItem, ...restStack]}, operation) {
	if (value === '') {
		return {
			value: '',
			stack: compressAddStack([...restStack], {
				value: latestItem.value,
				operation
			})
		}
	}
	return {
		value: '',
		stack: compressAddStack([latestItem, ...restStack], {
			value: parseFloat(value),
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
		case 'add':
			return applyOperation(state, 'ADD')
		case 'sub':
			return applyOperation(state, 'SUB')
		case 'times':
			return applyOperation(state, 'TIMES')
		case 'divide':
			return applyOperation(state, 'DIVIDE')
		case 'enter':
			return applyOperation(state, 'RESULT')
		case 'c':
			return initialState
		default:
		}
		break
	default:
	}
	return state
}
