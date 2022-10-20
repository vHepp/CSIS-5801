import React from 'react'
import '../Styles/Test.css'
import Aaron from "./Aaron"

const Test = () => {
	let x = 0;
	return (
		<div className='test-body'>
			Test
			<p>
				Hello World! {x}

				<Aaron />
			</p>
		</div>
	)
}

export default Test