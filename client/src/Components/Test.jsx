import React from 'react'
import '../Styles/Test.css'

const Test = () => {
	let x = 3;

	return (
		<div className='test-body'>
			Test

			<p>
				{x}
			</p>
		</div>
	)
}

export default Test