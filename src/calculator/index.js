import React from 'react'
import './index.css'

export function CalcComponent ({onBtn}) {
	const buttons = [
		{class: 'c', title: 'C'},
		{class: 'sign', title: '+/-'},
		{class: 'percent', title: '%'},
		{class: 'divide', title: '/'},
		{class: '7', title: '7'},
		{class: '8', title: '8'},
		{class: '9', title: '9'},
		{class: 'times', title: '*'},
		{class: '4', title: '4'},
		{class: '5', title: '5'},
		{class: '6', title: '6'},
		{class: 'minus', title: '-'},
		{class: '1', title: '1'},
		{class: '2', title: '2'},
		{class: '3', title: '3'},
		{class: 'plus', title: '+'},
		{class: '0', title: '0'},
		{class: 'point', title: '.'},
		{class: 'enter', title: '='}
	]
	return <div className="calculator">
		<div className="display">0</div>
		{buttons.map(btn => <div key={btn.class} className={'btn btn-' + btn.class} onClick={() => onBtn(btn.class)}>{btn.title}</div>)}
	</div>
}

export default function Calculator () {
	return <CalcComponent onBtn={() => {}}/>
}
