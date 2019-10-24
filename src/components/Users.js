import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Users extends Component{
	InstaService = new InstaService();
	state = {
		profiles: [],
		error: false
	}

	componentDidMount() {
		this.updateProfiles();
	}

	updateProfiles() {
		this.InstaService.getAllProfiles()
		.then(this.onProfilesLoaded)
		.catch(this.onError)
	}

	onProfilesLoaded = (profiles) => {
		this.setState({
			profiles: profiles,
			error: false
		})
	}

	onError = () => {
		this.setState({
			error: true
		})
	}

	renderProfiles(arr) {
		return arr.map(profile => {
			const {photo, alt, id, name} = profile;

			return (
				<User
					src={photo}
					alt={alt}
					name={name}
					min
				/>
			)
		})
	}


	render () {
		const {error, profiles} = this.state;

		if (error) {
			return (
				<ErrorMessage />
			)
		}

		const renderedProfiles = this.renderProfiles(profiles);

		return (
			<div className="right">
				<User 
					src="https://yt3.ggpht.com/a/AGF-l79EkOdcnHJZ-urycyU_CJVdRH1FZGNhyfcfCw=s900-c-k-c0xffffffff-no-rj-mo" 
					alt="owl"
					name="JustOwlOfficial"
				/>
				<div className="users__block">
					{renderedProfiles}
				</div>
			</div>
		)
	}
}
