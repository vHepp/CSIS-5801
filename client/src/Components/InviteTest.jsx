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
		<div className='invitetest-main'>
			<div className='box'>
				<button className='button' onClick={() => handleClick()}>Join</button>
			</div>
		</div>
	)
}

export default InviteTest