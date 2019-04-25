import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from '../components/common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  render() {
    const { containerStyles } = styles;
    
    return (
      <View style={containerStyles}>
        <Card>
          
          <Text style={styles.errorTextStyle}>
            { this.props.error }
          </Text>
          
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password (min 6 characters)"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
      </View>
    );
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) 
      return (<Spinner size="large" />);
    
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

LoginScreen.propTypes = {
  // state
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  // actions
  emailChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
