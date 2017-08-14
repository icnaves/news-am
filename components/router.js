import React from 'react'
import { StackNavigator } from 'react-navigation'


// Component pages
import Home from './pages/Home'
import Item from './pages/Item'


import Some from './pages/Some'

const styles = {
	headerStyle: {
		backgroundColor: '#e90606'
	},
	headerTitleStyle: {
		color: '#ffffff'
	},
	headerBackTitleStyle: {
		color: '#FFFFFF'
	}
}

export const NewsStask = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'NEWS.AM',
			headerStyle: styles.headerStyle,
			headerTitleStyle: styles.headerTitleStyle,
			headerBackTitleStyle: styles.headerBackTitleStyle
		},
	},
	Item: {
		screen: Item,
		navigationOptions: {
			headerStyle: styles.headerStyle,
			headerTitleStyle: styles.headerTitleStyle,
			headerBackTitleStyle: styles.headerBackTitleStyle
		},
	},
})