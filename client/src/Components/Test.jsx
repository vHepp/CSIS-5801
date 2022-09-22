import React from 'react'
import '../Styles/Test.css'

const Test = () => {
	let x = 0;
	return (
		<div className='test-body'>
			Test
			<p>
				Hello World! {x}
			</p>
		</div>
	)
}

export default Test