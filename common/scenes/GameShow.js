import React from 'react'

import EStyleSheet from 'react-native-extended-stylesheet'

import {
  View,
  Text,
  Image
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
        <SceneHeader
          title="Game"
          image="https://placekitten.com/1000/1000"
        >
          <Image
            style={styles.groupImage}
            source={{ uri: 'https://placekitten.com/1000/1000' }}
          />
        </SceneHeader>
        <Text>
          {this.context.route.params.gameId}
        </Text>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  $imageSize: 70,
  view: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  groupImage: {
    height: '$imageSize',
    width: '$imageSize',
    borderRadius: '0.5 * $imageSize',
  },
})


export default GameShow
