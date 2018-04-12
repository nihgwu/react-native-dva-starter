import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loading
