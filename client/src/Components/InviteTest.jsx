import React from 'react'
import '../Styles/InviteTest.css'

const InviteTest = ({ name }) => {

	const handleClick = () => {
		console.log("On Click")
		if (window.confirm('Click \'OK\' to be redirected to a Webex room')) {
			window.open('https://ysu.webex.com/meet/vuhepola', '_blank');
		};

	}

	return (
		<div className='box'>

			{name.length > 0 ?
				<div className='label'>Invite to {name}'s room</div>
				:
				<div className='label'>Invite</div>
			}

			<button className='button' onClick={() => handleClick()}>Join room</button>

		</div>
	)
}

export default InviteTest