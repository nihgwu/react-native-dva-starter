import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'dva'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  onPress = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Back" onPress={this.onPress} />
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
