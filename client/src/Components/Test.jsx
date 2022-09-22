import React from 'react'
import '../Styles/Test.css'

const Test = () => {
	let x = 1
	return (
		<div className='test-body'>
			Test
			<p>
				Hi {x}
			</p>
		</div>
	)
}

export default Test