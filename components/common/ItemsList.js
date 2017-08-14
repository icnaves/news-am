import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, RefreshControl, TouchableHighlight } from 'react-native';

export default class ItemsList extends React.Component {
    constructor(props) {
        super(props)
    }

	render() {
		const { innerViewStyle, imageStyle, textStyle, dateTextStyle } = style;
		return (
			<View>
				<ScrollView refreshControl={<RefreshControl refreshing={this.props.refreshing} onRefresh={this.props._onRefresh} />} >
					{
						this.props.items.map((item, i) => 
							<TouchableHighlight  onPress={() => this.props.onPress(item.id)} key={i}>
								<View style={innerViewStyle}>
									<Image style={imageStyle} source={{uri: item.img}} />
									<Text style={textStyle}>
										<Text style={dateTextStyle}>{item.date}</Text> {item.title}
									</Text>
								</View>
							</TouchableHighlight>
						)
					}
				</ScrollView>
			</View>
		)
	}
}

const style = StyleSheet.create({
	innerViewStyle: {
		alignItems: 'center',
		padding: 10,
		flex: 2,
		flexDirection: 'row',
		borderBottomColor: '#e1e1e1',
		borderBottomWidth: 1
	},
	imageStyle: {
		flex: 1,
		width: 80,
		height: 100,
		borderRadius: 6
	},
	textStyle: {
		fontSize: 15,
		flex: 2,
		lineHeight: 18,
		padding: 6
	},
	dateTextStyle: {
		paddingRight: 10,
		color: '#e90606'
	}
})