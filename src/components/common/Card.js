import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Card = props => (
  <View style={styles.containerStyle}>
    { props.children }
  </View>
);

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10
  }
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
};

export default Card;
