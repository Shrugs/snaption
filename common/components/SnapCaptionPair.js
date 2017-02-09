import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

import {
  SnapCaptionPair as cSnapCaptionPair,
  Caption,
} from '../constants'

class SnapCaptionPair extends Component {
  static propTypes = {
    snap: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <Image
        style={styles.image}
        source={{ uri: this.props.snap }}
      >
        <View style={styles.textBackground}>
          <Text style={styles.caption}>{this.props.caption}</Text>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    aspectRatio: cSnapCaptionPair.AspectRatio,
  },
  textBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Caption.BackgroundColor,
    marginBottom: 20,
  },
  caption: {
    color: Caption.FontColor,
    fontSize: Caption.FontSize,
    textAlign: 'center',
  },
})


export default SnapCaptionPair
