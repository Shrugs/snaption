import React, { Component } from 'react'

import EStyleSheet from 'react-native-extended-stylesheet'

import {
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native'

class GameListEntry extends Component {

  static propTypes = {
    didSelectGame: React.PropTypes.func.isRequired,
    gameId: React.PropTypes.string,
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        onPress={() => this.props.didSelectGame(this.props.gameId)}
      >
        <View style={styles.inner}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.groupImage}
              source={{ uri: 'https://placekitten.com/1000/1500' }}
            />
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Matt, Jenny, Imani
              </Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                {"Jenny's turn to play a snap!"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = EStyleSheet.create({
  $rowHeight: 100,
  $imageSize: 70,
  row: {
    flex: 1,
    minHeight: '$rowHeight',
    maxHeight: '$rowHeight',
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupImage: {
    height: '$imageSize',
    width: '$imageSize',
    borderRadius: '0.5 * $imageSize',
  },
  detailsContainer: {
    flex: 70,
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  subtitleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {

  },
  subtitle: {
    flex: 1,
  },
})


export default GameListEntry
