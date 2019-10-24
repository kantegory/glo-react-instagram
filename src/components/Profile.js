import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
	return (
		<div className="container profile">
			<User 
				src="https://sun9-2.userapi.com/c854016/v854016938/268b5/Tehvq1MtBrg.jpg"
				alt="Dokatilsya cover"
				name="KVNTEGORY"
			/>
			<Palette />
		</div>
	)
}

export default Profile;
