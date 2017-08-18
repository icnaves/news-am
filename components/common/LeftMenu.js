import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, ScrollView, SectionList, FlatList, ListItem, ActivityIndicator } from 'react-native'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'

export default class LeftMenu extends React.Component {
	render() {
		const menu = <Menu />;
		return(
			<SideMenu menu={menu}>
				{this.props.content}
			</SideMenu>
		)
	}
}