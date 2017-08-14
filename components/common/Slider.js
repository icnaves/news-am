import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';


export default class Slider extends React.Component {
    // Example with different children
    // render () {
    //     return (
    //         <Carousel
    //           ref={(carousel) => { this._carousel = carousel; }}
    //           sliderWidth={sliderWidth}
    //           itemWidth={itemWidth}
    //         >
    //             <View style={styles.slide1} />
    //             <Text style={styles.slide2} />
    //             <Image style={styles.slide3} />
    //         </Carousel>
    //     );
    // }

    // Example of appending the same component multiple times while looping through an array of data
    render () {
    	console.log(this.props._images)
        const slides = this.props._images.map((entry, index) => {
        	let width = 0;
        	let height = 0;
			Image.getSize(entry, (width, height) => {
				// calculate image width and height 
				const screenWidth = Dimensions.get('window').width
				const scaleFactor = width / screenWidth
				const imageHeight = height / scaleFactor
				width = screenWidth;
				height = imageHeight;
			})
            return (
                <View key={`entry-${index}`} style={{ flexDirection: 'row', flex: 1, width: width, height: height}}>
                    <Image source={{uri: entry}} style={{width: width, height: height}} />
                </View>
            );
        });

        return (
            <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={width}
              itemWidth={width}
            >
                { slides }
            </Carousel>
        );
    }
}