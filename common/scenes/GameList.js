import React from 'react'

import {
  StyleSheet,
  View,
} from 'react-native'

import SceneComponent from './SceneComponent'
import SceneHeader from '../components/SceneHeader'

class GameList extends SceneComponent {

  static propTypes = {
    key: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.view}>
        <SceneHeader title="Games" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})


export default GameList
