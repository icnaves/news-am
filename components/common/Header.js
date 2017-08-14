import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class Header extends React.Component {
	render() {
		const { viewStyles, textStyles } = style;
		return (
			<View style={viewStyles}>
				<StatusBar backgroundColor="blue" barStyle="light-content" />
				<Text style={textStyles}>{this.props.children}</Text>
			</View>
		)
	}
}

const style = StyleSheet.create({
	viewStyles: {
		padding: 18,
		paddingTop: 24,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e90606'
	},
	textStyles: {
		fontSize: 18,
		color: '#FFFFFF'
	}
})