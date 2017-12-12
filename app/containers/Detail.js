import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
        <Button text="Go Back" onPress={this.goBack} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Detail
