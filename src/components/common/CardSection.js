import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  style: PropTypes.object,
};

CardSection.defaultProps = {
  children: [],
  style: {}
};

export default CardSection;
