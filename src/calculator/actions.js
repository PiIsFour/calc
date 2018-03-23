export const actionType = Object.freeze({
	input: 'INPUT'
})

export function input (key) {
	return {
		type: actionType.input,
		key
	}
}
