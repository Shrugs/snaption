/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'

import Index from './common/containers/Index'
// import SnapCaptionPair from './common/components/SnapCaptionPair'
// <SnapCaptionPair
//   snap="https://placekitten.com/1000/1500"
//   caption="when ur a fucking cat lol"
// />

export default class Snaption extends Component {
  render() {
    return (
      <Index />
    )
  }
}

AppRegistry.registerComponent('Snaption', () => Snaption)
