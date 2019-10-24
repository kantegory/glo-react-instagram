import React, {Component} from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import Preloader from './Preloader';


export default class Palette extends Component {
	InstaService = new InstaService();
	state = {
		error: false,
		photos: [],
		loaded: false
	}

	componentDidMount() {
		this.updatePhotos();
	}

	updatePhotos() {
		this.InstaService.getAllPhotos()
		.then(this.onPhotosLoaded)
		.catch(this.onError)
	}

	onError = () => {
		this.setState({
			error: true,
		})
	}

	onPhotosLoaded = (photos) => {
		this.setState({
			error: false,
			photos: photos,
			loaded: true
		})	
	}

	renderPhotos(arr) {
		return arr.map(photo => {
			const {src, alt, id} = photo;

			return (
				<img key={id} src={src} alt={alt}></img>
			)
		})
	}

	render () {
		const {error, photos, loaded} = this.state;

		if (!loaded && !error) {
			return <Preloader />
		}

		if (error) {
			return <ErrorMessage />
		}

		const renderedPhotos = this.renderPhotos(photos);

		return (
			<div className="palette">
				{renderedPhotos}
			</div>
		)
	}
}
