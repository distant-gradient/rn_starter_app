import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { incrementCount, resetCount, getAlbums } from '../actions';
import { goToSettings } from '../navigation/nav';
import { Button, Spinner, Card, CardSection } from '../components/common';
import s from '../styles/styles';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // to bind navigation button clicks
    this.onSettingButtonPress = this.onSettingButtonPress.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentDidMount() {
    console.log('profile screen component did mount');
  }
 
  render() {
    const { containerStyles, textStyles, spaceBetween } = styles;

    return (
      <View style={containerStyles}>
        <Card>
          <CardSection>
            <Text style={textStyles}>
              This is the Profile Page
            </Text>
          </CardSection>
        </Card>
          
        <Card>
          <CardSection style={spaceBetween}>
            <Text style={textStyles}>Redux State </Text>
            <Text style={textStyles}>Count: {this.props.count}</Text>
          </CardSection>
          
          <CardSection style={spaceBetween}>
            <Button onPress={this.onIncrement}>Click to increment</Button>
            <Button onPress={this.onReset}>Reset</Button>
          </CardSection>
        </Card>
        
        <Card>
          
          <CardSection>
            <Text style={textStyles}>Async Ajax Call w/ Redux + Redux Thunk + Axios</Text>
          </CardSection>
          
          <CardSection>
            { this.renderButton() }
          </CardSection>
      
          <CardSection>
            <Text>Result:</Text> 
            { this.renderFetchedData() }
          </CardSection>
        
        </Card>

        <Card>
          <CardSection>
            <Text style={s.secondBtn} onPress={this.onSettingButtonPress}>
              Go To Settings
            </Text>
          </CardSection>
        </Card>

      </View>
    );
  }

  onSettingButtonPress() {
    goToSettings(this.props.componentId);
  } 

  renderFetchedData() {
    if (this.props.loading)
      return (null);

    if (this.props.albums && this.props.albums.data && this.props.albums.data.length > 0)
      return (
        <Text>{this.props.albums.data[0].title}</Text>
      );
    
    return (null);
  }

  renderButton() {
    if (this.props.loading) 
      return (<Spinner size="large" />);

    return (
      <Button onPress={this.onButtonPress}>
        Fetch Data 
      </Button>
    );
  }

  onButtonPress() {
    this.props.getAlbums();
  }
  
  onReset() {
    this.props.resetCount();
  }
  
  onIncrement() {
    this.props.incrementCount(1);
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when navigation buttons are clicked
    if (buttonId === 'Settings')
      this.onSettingButtonPress();
  }
}

const styles = {
  containerStyles: {
    flex: 1,
  },
  textStyles: {
    fontSize: 24 
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
};

const mapStateToProps = (state) => {
  const { count } = state.count;
  const { albums, loading } = state.albums;
  return ({ count, albums, loading });
};


ProfileScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  // actions
  incrementCount: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
  getAlbums: PropTypes.func.isRequired,
  // state
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  albums: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { incrementCount, resetCount, getAlbums })(ProfileScreen);
