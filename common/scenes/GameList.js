import React from 'react'

import EStyleSheet from 'react-native-extended-stylesheet'

import {
  View,
  ListView,
} from 'react-native'

import SceneComponent from './SceneComponent'
import SceneHeader from '../components/SceneHeader'
import GameListEntry from '../components/GameListEntry'

class GameList extends SceneComponent {

  static propTypes = {
    key: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.didSelectGame = this.didSelectGame.bind(this)

    // @TODO(shrugs) - use a better comparator once we know the datastructure
    const gds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      gameDataSource: gds.cloneWithRows([
        // @TODO(shrugs) - replace this with real data eventually, I suppose
        '1', '2', '3',
      ]),
    }
  }

  didSelectGame(gameId) {
    // @TODO(shrugs) - move this into a helper function ala action-creator
    this.context.navigator.push({
      scene: 'game-show',
      params: {
        gameId,
      },
    })
  }

  render() {
    return (
      <View style={styles.view}>
        <SceneHeader title="Games" />
        <ListView
          dataSource={this.state.gameDataSource}
          renderRow={(rowData) => (
            <GameListEntry gameId={rowData} didSelectGame={this.didSelectGame} />
          )}
        />
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


export default GameList
