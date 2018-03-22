import React from 'react'

export default function Connect ({children, pick, state, dispatch}) {
	return <React.Fragment>
		{React.Children.map(children, child => React.cloneElement(child, pick(state, dispatch)))}
	</React.Fragment>
}
