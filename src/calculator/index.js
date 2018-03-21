import React from 'react'
import './index.css'

export function Component () {
	return <div className="calculator">
		<div className="display">0</div>
		<div className="btn btn-c">C</div>
		<div className="btn btn-sign">+/-</div>
		<div className="btn btn-percent">%</div>
		<div className="btn btn-divide">/</div>
		<div className="btn btn-7">7</div>
		<div className="btn btn-8">8</div>
		<div className="btn btn-9">9</div>
		<div className="btn btn-times">*</div>
		<div className="btn btn-4">4</div>
		<div className="btn btn-5">5</div>
		<div className="btn btn-6">6</div>
		<div className="btn btn-minus">-</div>
		<div className="btn btn-1">1</div>
		<div className="btn btn-2">2</div>
		<div className="btn btn-3">3</div>
		<div className="btn btn-plus">+</div>
		<div className="btn btn-0">0</div>
		<div className="btn btn-point">.</div>
		<div className="btn btn-enter">=</div>
	</div>
}

export default function Calculator () {
	return <Component />
}
