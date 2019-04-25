import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { goToHome, goToLogin } from '../navigation/nav';
import { Spinner } from '../components/common';

class LoaderScreen extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      this.initializeApp();
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user: ', user);
      if (user) {
        goToHome();
      } else {
        goToLogin();
      }
    });
  }
  
  initializeApp() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDGrxEdxrzM_SDleIoSWLZqp0ZmaoLXg0Q',
      authDomain: 'react-native-starter-app-df13c.firebaseapp.com',
      databaseURL: 'https://react-native-starter-app-df13c.firebaseio.com',
      projectId: 'react-native-starter-app-df13c',
      storageBucket: 'react-native-starter-app-df13c.appspot.com',
      messagingSenderId: '423789526696'
    });
  }

  render() {
    const { containerStyles } = styles;

    return (
      <View style={containerStyles}>
        <Spinner />
      </View>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  }
};

export default LoaderScreen; 
