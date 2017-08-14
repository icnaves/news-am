import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SectionList, FlatList, ListItem, ActivityIndicator } from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>NEWS.AM</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 20
    }
});
