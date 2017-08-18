import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SectionList, FlatList, ListItem, ActivityIndicator } from 'react-native'
import Modal from '../common/Modal'

// Components
import LeftMenu from '../common/LeftMenu'
import ItemsList from '../common/ItemsList'

// Services
import { getNews } from '../../services/NewsService'

// Pages
import Item from './Item'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            isLoading: true,
            refreshing: false
        }
    }
    componentDidMount() {
        getNews().then(data => this.setState({ news: data, isLoading: false }))
    }
    _onRefresh() {
        this.setState({refreshing: true});
        getNews().then(data => {this.setState({ news: data, isLoading: false, refreshing: false })})
    }
    _onPress(id) {
        this.props.navigation.navigate('Item', {id: id})
    }
    render() {
        const { navigate } = this.props.navigation;
        if(this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            const content = <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                        <ItemsList
                        onPress={this._onPress.bind(this)}
                        refreshing={this.state.refreshing}
                        _onRefresh={this._onRefresh.bind(this)}
                        items={this.state.news} />
                        <Modal />
                    </View>
            return (
                <LeftMenu content={content} />
            );
        }
    }
}
