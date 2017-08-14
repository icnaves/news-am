import React from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, SectionList, FlatList, ListItem, ActivityIndicator, NavigatorIOS } from 'react-native'
import { StackNavigator } from 'react-navigation';

// Components
import Header from './components/common/Header'
import ItemsList from './components/common/ItemsList'

// Services
import { getNews } from './services/NewsService'

// Pages
import Home from './components/pages/Home'
import Item from './components/pages/Item'

import { NewsStask } from './components/router'

// export default class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <Home />
//         )
//     }
// }

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <NewsStask />
    )
  }
}