import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Modal from 'react-native-modal'

import { getLang, setLang } from '../../store'

import Lang from '../../lang'

export default class Menu extends React.Component {
	constructor() {
		super()
		this.state = {
			isModalVisible: false
		}
	}
// setLang('eng')

	_showModal = () => this.setState({ isModalVisible: true })

	_hideModal = () => this.setState({ isModalVisible: false })

	_onPress(id) {
		console.log(id)
	}

	render() {
		const lang = getLang()
		const keys = Object.keys(Lang[lang])
		const {
			viewStyles,
			touchStyles,
			textStyles,
			modalStyles,
			modalBtnStyles,
			modalViewStyles
		} = styles
		return (
			<ScrollView scrollsToTop={false}>
				<View style={viewStyles}>
					{
						keys.map(i => 
							<TouchableHighlight key={i} onPress={this._onPress.bind(this, 12)} style={touchStyles}>
								<Text style={textStyles}>{ Lang[lang][i].title }</Text>
							</TouchableHighlight>
						)
					}
							<TouchableHighlight onPress={this._showModal.bind(this)} style={touchStyles}>
								<Text style={textStyles}>English</Text>
							</TouchableHighlight>
				</View>
				<Modal transparent={true} isVisible={this.state.isModalVisible}>
					<View style={modalViewStyles}>
						<Text>Hello!</Text>
						<TouchableHighlight onPress={this._hideModal.bind(this)}>
							<Text style={modalBtnStyles}>Close</Text>
						</TouchableHighlight>
					</View>
				</Modal>
			</ScrollView>
		)
	}
}

let styles = StyleSheet.create({
	viewStyles: {
	},
	touchStyles: {
		padding: 20,
		margin: 0,
		backgroundColor: '#f5f5f5',
		borderBottomColor: '#e1e1e1',
		borderBottomWidth: 1,
	},
	textStyles: {
		color: '#e90606',
	},
	modalViewStyles: {
		flex: 1,
		backgroundColor: '#ffffff',
		padding: 20,
	},
	modalBtnStyles: {
		padding: 20,
	}
});