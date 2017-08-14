import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './App';
import Item from './component/pages/Item';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home"
          component={Home}
          title="NEWS.AM"
          initial
        />
        <Scene
          key="item"
          component={Item}
          title="Item"
        />
      </Scene>
    </Router>
  );
}

export default App;