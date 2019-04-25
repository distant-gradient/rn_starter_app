import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './src/navigation/screens';
import { store } from './src/store';

// To see all the requests in the chrome Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;
// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

registerScreens(Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'rnStarterApp.LoaderScreen',
      },
    },
  });
});
