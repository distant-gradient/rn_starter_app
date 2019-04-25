import { Navigation } from 'react-native-navigation';

import { LoaderScreen, LoginScreen, HomeScreen, SettingsScreen, ProfileScreen } from '../screens';

export function registerScreens(Provider, store) {
  Navigation.registerComponent('rnStarterApp.LoaderScreen', () => LoaderScreen);
  Navigation.registerComponentWithRedux('rnStarterApp.LoginScreen', () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux('rnStarterApp.HomeScreen', () => HomeScreen, Provider, store);
  Navigation.registerComponentWithRedux('rnStarterApp.ProfileScreen', () => ProfileScreen, Provider, store);
  Navigation.registerComponent('rnStarterApp.SettingsScreen', () => SettingsScreen);
}
