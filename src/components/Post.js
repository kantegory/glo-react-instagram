import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
	render() {
		return (
			<div className="post">
				<User 
					src="https://yt3.ggpht.com/a/AGF-l79EkOdcnHJZ-urycyU_CJVdRH1FZGNhyfcfCw=s900-c-k-c0xffffffff-no-rj-mo" 
					alt="owl"
					name="JustOwlOfficial"
					min
				/>
				<img src={this.props.src} alt={this.props.alt}></img>
				<div className="post__name">
					some account
				</div>
				<div className="post__descr">
					some post__description
				</div>
			</div>
		)
	}
}
