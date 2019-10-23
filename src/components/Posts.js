import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';


export default class Posts extends Component {
	InstaService = new InstaService();
	state = {
		posts: [],
		error: false
	}

	componentDidMount() {
		this.updatePosts();
	}

	updatePosts() {
		this.InstaService.getAllPosts()
		.then(this.onPostLoaded)
		.catch(this.onError);
	}

	onPostLoaded = (posts) => {
		this.setState({
			posts,
			error: false
		})
	}

	renderPosts(arr) {
		return arr.map(post => {
			const {name, altname, photo, src, alt, descr, id} = post;

			return (
				<div key={id} className="post">
					<User 
						src={photo} 
						alt={altname}
						name={name}
						min
					/>
					<img src={src} alt={alt}></img>
					<div className="post__name">
						{name}
					</div>
					<div className="post__descr">
						{descr}
					</div>
				</div>
			)
		})
	}

	onError = (err) => {
		console.log('Oh this is probably error', err);

		this.setState({
			error: true
		})
	}

	render() {
		const {posts, error} = this.state;
		
		if (error) {
			return <ErrorMessage/>
		}

		const renderedPosts = this.renderPosts(posts);
		return (
			<div className="left">
				{renderedPosts}
			</div>
		)
	}
}
