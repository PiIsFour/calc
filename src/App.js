import React, { Component } from 'react'
import Calculator from './calculator/index'

class App extends Component {
	render () {
		return (
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<header>
					<h1>Welcome to Calc</h1>
				</header>
				<Calculator />
			</div>
		)
	}
}

export default App
