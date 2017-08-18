import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'


import ImageSlider from 'react-native-image-slider';
 
export default class Slider extends React.Component {
    render() {
        return (<ImageSlider style={{height: 400}} images={this.props._images}/>)
    }
}