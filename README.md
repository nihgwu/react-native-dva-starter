# react-native-dva-starter

A React Native starter powered by [dva](https://github.com/dvajs/dva) and [react-navigation](https://github.com/react-community/react-navigation)

## Start

```bash
npm install dva-native-cli -g
dvanative git app
cd app
react-native run-ios # or react-native run-android
```

Great thanks to @xuan45 for his cli tool [dva-native-cli](https://github.com/xuan45/dva-native-cli), check that project for more information.

## Advance

The builtin router of **dva** (not **react-router v4**), doesn't support React Native, we have to integrate other router components, such as **Navigator**, **ExperimentalNavigation**, **react-native-router-flux** and **react-navigation**. Since the former two will be depreciated in flavor of **react-navigation**, which is also be recommended by official, so I choose it to be the navigator.

<del>In this starter, I provide a router model to control the default action flow of **react-navigation** to workaround a known [issue](https://github.com/react-community/react-navigation/issues/271). If you don't need this, the integration will be much simpler, you can simply remove the router model and pass **routerReducer** to **extraReducer** of dva `extraReducers: { router: routerReducer }`. Read [Redux Integration](https://reactnavigation.org/docs/guides/redux) and [dva's API](https://github.com/dvajs/dva/blob/master/docs/API.md) for more information.</del>

Also there is another workaround for a missing feature https://github.com/react-community/react-navigation/issues/232, so I use two **StackNavigators** to contain the screens with different transition animations, you can create you own transition animations via **transitionConfig**, see https://github.com/react-community/react-navigation/pull/99

## LICENSE

MIT
