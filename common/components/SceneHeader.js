import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import {
  SceneHeader as cSceneHeader,
} from '../constants'

class SceneHeader extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.textSpacer} />
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.textSpacer} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: cSceneHeader.Height,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textSpacer: {
    flex: 15,
  },
  textContainer: {
    flex: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: cSceneHeader.BorderColor,
    borderBottomWidth: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: cSceneHeader.FontSize,
    color: cSceneHeader.FontColor,
  },
})


export default SceneHeader
