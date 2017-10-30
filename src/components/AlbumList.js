import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
		return this.state.albums.map(album => <Text>{album.title}</Text>);
	}

	render() {
	console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

export default AlbumList;
