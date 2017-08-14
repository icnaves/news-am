import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Loading extends React.Component {
	render() {
		if (this.props.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator />
				</View>
			);
		}
	}
}