import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SectionList, FlatList, ListItem, ActivityIndicator } from 'react-native'

// Common components
import { Styles } from '../common/Styles'

import Slider from '../common/Slider'

// Services
import { getNewById } from '../../services/NewsService'

export default class Item extends React.Component {
    constructor() {
        super()
        this.state = {
            news: {},
            isLoading: false
        }
    }
    static navigationOptions = {
        title: '',
    }
    componentDidMount() {
        let id = this.props.navigation.state.params.id;
        console.log(id)
        this.setState({ isLoading: true })
        getNewById(id).then(data => {
            this.setState({ news: data, isLoading: false })
        })
    }
    render() {
        const { news } = this.state
        const {
            innerViewStyle,
            scrollViewStyles,
            imageStyles,
            titleTextStyles,
            dateTextStyles,
            descTextStyles
        } = styles
        const { activityStyles } = Styles

        if(this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator style={activityStyles} />
                </View>
            )
        }
        else {
            return (
                <View style={innerViewStyle}>
                    <ScrollView style={scrollViewStyles}>
                        <Text style={titleTextStyles}>{news.title}</Text>
                        <Text style={dateTextStyles}>{news.date}</Text>

                        {
                            news.img ? <Slider _images={news.img} />
                            // news.img.map((img, k) => <Image key={k} source={{uri: img}} style={imageStyles} />)
                            : null
                        }
                        <Text style={descTextStyles}>{news.desc}</Text>
                    </ScrollView>
                </View>
            );
        }
    }   
}

const styles = StyleSheet.create({
    innerViewStyle: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    scrollViewStyles: {
        padding: 14,
    },
    imageStyles: {
        width: '100%',
        height: 300,
        marginBottom: 4,
    },
    titleTextStyles: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 4,
    },
    dateTextStyles: {
        fontSize: 14,
        marginBottom: 4,
        color: '#e90606'
    },
    descTextStyles: {
        textAlign: 'justify'
    }
})