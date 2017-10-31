import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Class based Component that allows access to several methods
class AlbumList extends Component {
	// Initial State: An empty array of albums
	state = { albums: [] };
	
	// Automatically excuted as soon as it is rendered on to the screen
	componentWillMount() {
		fetch('http://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((responseData) => this.setState({ albums: responseData }));
	}

	renderAlbums() {
	// .map is an array helper
		return this.state.albums.map(album => 
			// name of prop is not linked with name of variable in state
			<AlbumDetail key={album.title} album={album}/>
		);
	}

	render() {
	console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
