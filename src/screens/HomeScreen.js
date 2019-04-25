import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { FlatList, View } from 'react-native';
import { getFeed } from '../actions';
import { Spinner } from '../components/common';
import ContentCard from '../components/ContentCard';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.handleListRefresh = this.handleListRefresh.bind(this);
  }

  componentDidMount() {
    // This is shown as an example of ComponentDidAppear. 
    // Practically, the action call can simply be included here, 
    // if such micro optimizations are not required.
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    console.log('home tab did appear');
    if (!this.props.feed || !('feed' in this.props.feed) || Object.keys(this.props.feed.feed).length === 0)
      this.props.getFeed();
  }

  render() {
    const { containerStyles } = styles;
    
    if (this.props.loading) 
      return (<Spinner />);
   
    if (!this.props.feed)
      return null;
    
    return (
      <View style={containerStyles}>
        <FlatList
          data={this.props.feed.feed}
          renderItem={({ item }) => <ContentCard content={item} />}
          keyExtractor={(item, index) => index.toString()}
          refreshing={this.props.loading}
          onRefresh={this.handleListRefresh}
        />
      </View>
    );
  }

  handleListRefresh() {
    this.props.getFeed();
  }
}

const styles = {
  containerStyles: {
    flex: 1,
  },
};


const mapStateToProps = (state) => {
  console.log('state: ', state);
  const { feed, loading } = state.feed;
  return { feed, loading };
};

HomeScreen.propTypes = {
  // state
  feed: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  // actions
  getFeed: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { getFeed })(HomeScreen);
