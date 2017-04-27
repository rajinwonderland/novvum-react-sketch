import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it


const CardContainer = ({ name, subtitle }) => (
  <View
    name={`Card ${name}`}
    style={{
			flex: 1,
      width: 160,
      margin: 10,
      marginTop: 0,
      backgroundColor: '#fff',
			shadowRadius: 2,
			shadowOffset: {
				height: 1,
				width: 2,
			},
      shadowColor: 'rgba(0,0,0,0.24)'
    }}
  >
    <Image
      name='Image'
      source='https://vignette4.wikia.nocookie.net/batman/images/4/46/Slider-arkhamorigins.jpg/revision/latest/scale-to-width-down/660?cb=20130413005205'
      resizeMode="cover"
      style={{flex: 1, height: 90}}
    />
    <View name='Content' style={{flex: 1, padding: 10}}>
      <Text name="Name" style={{ color: '#000', fontWeight: 'bold' }}>
        {name}
      </Text>
      <Text name="Subtitle" style={{ color: '#333' }}>
        {subtitle}
      </Text>
    </View>
  </View>
);

const Color = {
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

CardContainer.propTypes = Color;

const Card = () => (
  <Artboard
    name="Cards"
    style={{
      flex: 1,
      backgroundColor: 'white'
    }}
  >
    <CardContainer
      name='Batman'
      subtitle="I'm Batman"
    />
  </Artboard>
);



export default Card;
