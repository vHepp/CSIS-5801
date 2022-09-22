import React from 'react'
import '../Styles/Test.css'

const Test = () => {
	let x = 0;
	return (
		<div className='test-body'>
			Test
			<p>
				Hello World! This is my first project! {x}
			</p>
		</div>
	)
}

export default Test