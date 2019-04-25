import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';

const ContentCard = ({ content }) => {
  const { title, image, creator, tags, timestamp } = content;
  
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: creator.image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{tags[0]}</Text>
          <Text>{creator.name} &#9679; {timestamp} ago</Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

/*
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
      */

ContentCard.propTypes = {
  content: PropTypes.object.isRequired
};

export default ContentCard;
