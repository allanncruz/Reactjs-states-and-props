import React, { Component } from 'react'

class HelloWorld extends Component {
	render() {
		const result = 4
		const style = {
			color: '#ff0000',
			fontSize: 50,
			backgroundColor: '#000000'
		}
		return (
			<div className="my-class-from-react">
				{/* This is my first componet */}
				<h1 style={style}>Hello World React</h1>
				<h4>{ result === 2 * 2 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div>}</h4>
			</div>
		)
	}
}

export default HelloWorld