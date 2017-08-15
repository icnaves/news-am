import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'


import ImageSlider from 'react-native-image-slider';
 
export default class Slider extends React.Component {
    render() {
        console.log(this.props._images)
        return (<ImageSlider images={this.props._images}/>)
    }
}