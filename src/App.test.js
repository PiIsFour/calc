import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

describe('app', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<App />, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	it('snapshot matches', () => {
		const wrapper = shallow(<App />)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})
})
