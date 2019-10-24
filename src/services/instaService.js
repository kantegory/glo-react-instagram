export default class instaService {
	constructor () {
		this._apiBase = "http://localhost:3000";
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}; recieved ${res.status}`);
		}

		return await res.json();
	}

	getAllPosts = async () => {
		const res = await this.getResource('/posts/');
		return res;
	}

	getAllPhotos = async () => {
		const res = await this.getResource('/posts/');
		return res.map(this._transformPosts);
	}

	_transformPosts = (post) => {
		return {
			src: post.src,
			alt: post.alt,
			id: post.id
		}
	}

	getAllProfiles = async () => {
		const res = await this.getResource('/posts/');
		return res.map(this._transformProfiles);
	}

	_transformProfiles = (profile) => {
		return {
			photo: profile.photo,
			alt: profile.altname,
			id: profile.id,
			name: profile.name
		}
	}
}
