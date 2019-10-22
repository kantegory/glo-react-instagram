import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
	render() {
		return (
			<div className="left">
				<Post src="https://avatars1.githubusercontent.com/u/32088636?s=460&v=4" alt="Triangle" />
				<Post src="https://sun9-2.userapi.com/c854016/v854016938/268b5/Tehvq1MtBrg.jpg" alt="MyPhoto" />
			</div>
		)
	}
}
