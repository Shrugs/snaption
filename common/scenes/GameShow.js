import React from 'react'

import EStyleSheet from 'react-native-extended-stylesheet'

import {
  View,
  Text,
} from 'react-native'

import SceneComponent from './SceneComponent'
import SceneHeader from '../components/SceneHeader'

class GameShow extends SceneComponent {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.view}>
        <SceneHeader title="Game" />
        <Text>
          {this.context.route.params.gameId}
        </Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
})


export default GameShow
