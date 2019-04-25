import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { View } from 'react-native';
import { Card, CardSection, Button, Confirm } from '../components/common';
import { goBack, goToLogin } from '../navigation/nav';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.onSignOutButtonPress = this.onSignOutButtonPress.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }
  
  state = { showModal: false }

  render() {
    const { containerStyles } = styles;

    return (
      <View style={containerStyles}>
        <Card>
          <CardSection>
            <Button onPress={this.onSignOutButtonPress}>
              Sign Out
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress}>
              Go Back
            </Button>
          </CardSection>
        </Card>
        <Confirm visible={this.state.showModal} onAccept={this.onAccept} onDecline={this.onDecline}>
          Are you sure you want to sign out? 
        </Confirm>
      </View>
    );
  }

  onSignOutButtonPress() {
    this.setState({ showModal: true });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    firebase.auth().signOut();
    goToLogin(); 
  }

  onButtonPress() {
    goBack(this.props.componentId);
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
};

SettingsScreen.propTypes = {
  componentId: PropTypes.string.isRequired
};

export default SettingsScreen;
