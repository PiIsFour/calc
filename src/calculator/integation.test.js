import React from 'react'
import { mount } from 'enzyme'

import Calculator from './index'

describe('calculator integation test', () => {
	it('displays 0 at start', () => {
		const wrapper = mount(<Calculator />)
		expect(wrapper.find('.display')).toHaveText('0')
	})

	it('1+1=2', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-plus').simulate('click')
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-enter').simulate('click')
		expect(wrapper.find('.display')).toHaveText('2')
	})
})
