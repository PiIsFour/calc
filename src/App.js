import React, { Component } from 'react'
import Calculator from './calculator/'

class App extends Component {
	render () {
		return (
			<div>
				<header>
					<h1>Welcome to Calc</h1>
				</header>
				<Calculator />
			</div>
		)
	}
}

export default App
