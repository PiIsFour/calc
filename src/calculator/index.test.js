import React from 'react'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

import {CalcComponent} from './index'

describe('calculator', () => {
	it('snapshot matches', () => {
		const wrapper = shallow(<CalcComponent value="0"/>)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})

	it('calls onBtn', () => {
		const mockOnBtn = jest.fn()
		const wrapper = shallow(<CalcComponent onBtn={mockOnBtn}/>)
		wrapper.find('.btn-8').simulate('click')
		expect(mockOnBtn).toBeCalledWith('8')
	})
})
