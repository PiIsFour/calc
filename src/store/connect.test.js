import React from 'react'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

import Connect from './connect'

describe('Connect', () => {
	it('snapshot matches', () => {
		const wrapper = shallow(<Connect pick={() => {}}><div/></Connect>)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})

	it('renders the children', () => {
		const wrapper = shallow(<Connect pick={() => {}}><div className="testchild"/></Connect>)
		expect(wrapper.find('div')).toHaveClassName('testchild')
	})

	it('picks part of state', () => {
		const state = {test: 'state'}
		const dispatch = jest.fn()
		const pick = jest.fn().mockReturnValue({value: state.test})
		const wrapper = shallow(<Connect state={state} dispatch={dispatch} pick={pick}><div className="testchild"/></Connect>)
		expect(pick).toHaveBeenCalledWith(state, dispatch)
		expect(dispatch).not.toHaveBeenCalled()
		expect(wrapper.find('.testchild')).toHaveProp('value', state.test)
	})

	it('picks actions to make avaidable', () => {
		const state = {test: 'state'}
		const dispatch = jest.fn()
		const pick = jest.fn((state, dispatch) => ({ontest: a => dispatch(a)}))
		const wrapper = shallow(<Connect state={state} dispatch={dispatch} pick={pick}><div className="testchild"/></Connect>)
		expect(pick).toHaveBeenCalledWith(state, dispatch)
		expect(dispatch).not.toHaveBeenCalled()
		const teststring = 'teststring'
		wrapper.find('.testchild').prop('ontest')(teststring)
		expect(dispatch).toHaveBeenCalledWith(teststring)
	})
})
