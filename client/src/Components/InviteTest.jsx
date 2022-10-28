import React from 'react'
import '../Styles/InviteTest.css'

const InviteTest = () => {

	const handleClick = () => {
		console.log("On Click")
		if (window.confirm('Click \'OK\' to be redirected to a Webex room')) {
			window.open('https://ysu.webex.com/meet/vuhepola', '_blank');
		};

	}

	return (
		<div className='box'>
			<div className='label'>InviteTest</div>

			<div className='button'>
				<button onClick={() => handleClick()}>Join room</button>
			</div>
		</div>
	)
}

export default InviteTest