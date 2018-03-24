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
		wrapper.find('.btn-add').simulate('click')
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-enter').simulate('click')
		expect(wrapper.find('.display')).toHaveText('2')
	})

	it('second calculation works too (bug#2)', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-add').simulate('click')
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-enter').simulate('click')

		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-add').simulate('click')
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-enter').simulate('click')
		expect(wrapper.find('.display')).toHaveText('2')
	})

	it('show the operration when pressed (issue#4)', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-5').simulate('click')
		wrapper.find('.btn-add').simulate('click')
		expect(wrapper.find('.display')).toHaveText('5+')
	})

	it('operations handle it when no number is input (bug#6)', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-add').simulate('click')
		expect(wrapper.find('.display')).toHaveText('0+')
	})

	it('15-9- => 6-', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-1').simulate('click')
		wrapper.find('.btn-5').simulate('click')
		wrapper.find('.btn-sub').simulate('click')
		wrapper.find('.btn-9').simulate('click')
		wrapper.find('.btn-sub').simulate('click')
		expect(wrapper.find('.display')).toHaveText('6-')
	})

	it('6/3+2*4=10', () => {
		const wrapper = mount(<Calculator />)
		wrapper.find('.btn-6').simulate('click')
		wrapper.find('.btn-divide').simulate('click')
		wrapper.find('.btn-3').simulate('click')
		wrapper.find('.btn-add').simulate('click')
		wrapper.find('.btn-2').simulate('click')
		wrapper.find('.btn-times').simulate('click')
		wrapper.find('.btn-4').simulate('click')
		wrapper.find('.btn-enter').simulate('click')
		expect(wrapper.find('.display')).toHaveText('10')
	})
})
