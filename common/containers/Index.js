import React, { Component } from 'react'

import {
  Navigator,
} from 'react-native'

import SceneProvider from './SceneProvider'
import GameList from '../scenes/GameList'

const Scenes = {
  'games-index': GameList,
  // 'game-show': GameShow,
}

class Index extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ scene: 'games-index', index: 0 }}
        renderScene={(route, navigator) => {
          const SceneToRender = Scenes[route.scene]
          return (
            <SceneProvider route={route} navigator={navigator}>
              <SceneToRender />
            </SceneProvider>
          )
        }}
      />
    )
  }
}

export default Index
