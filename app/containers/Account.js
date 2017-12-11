import React, { Component } from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    title: 'Account',
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/person.png')}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
  gotoLogout = () => {
    this.props.dispatch({
      type: 'app/logout',
      cb: () => {
        // turn to Login
        this.props.navigation.navigate('Login')
      },
    })
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        {login ? (
          <View>
            <Text>已登录</Text>
            <Button title="Goto Logout" onPress={this.gotoLogout} />
          </View>
        ) : (
          <Button title="Goto Login" onPress={this.gotoLogin} />
        )}
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

export default Account
