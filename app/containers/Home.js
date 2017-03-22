import React, { Component } from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'
import { connect } from 'dva'

import { NavigationActions } from '../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBar: {
      label: 'Home',
      icon: ({ focused, tintColor }) => (
        <Image
          style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
          source={require('../images/house.png')}
        />
      ),
    },
  }

  onPress = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Goto Detail" onPress={this.onPress} />
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
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
