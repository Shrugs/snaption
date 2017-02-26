import React, { Component } from 'react'

import EStyleSheet from 'react-native-extended-stylesheet'

import {
  View,
  Text,
  Image
} from 'react-native'

import {
  SceneHeader as cSceneHeader,
} from '../constants'

class SceneHeader extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.textSpacer} />
          <View style={styles.contentContainer}>
              {this.props.image &&
                <View style={styles.contentRow}>
                  <Image
                    style={styles.groupImage}
                    source={{ uri: this.props.image }}
                  />
                </View>
              }
            <View style={styles.contentRow}>
              <Text style={styles.headerText}>
                {this.props.title}
              </Text>
            </View>
          </View>
          <View style={styles.textSpacer} />
        </View>
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  $imageSize: 70,
  header: {
    height: cSceneHeader.Height,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  contentRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSpacer: {
    flex: 15,
  },
  contentContainer: {
    flex: 70,
    flexDirection: 'column',
    borderBottomColor: cSceneHeader.BorderColor,
    borderBottomWidth: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: cSceneHeader.FontSize,
    color: cSceneHeader.FontColor,
  },
  groupImage: {
    height: '$imageSize',
    width: '$imageSize',
    borderRadius: '0.5 * $imageSize',
  },
})


export default SceneHeader
