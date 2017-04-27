import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex).darken(3).hex();
};

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text name="Swatch Name" style={{ color: textColor(hex), fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: textColor(hex) }}>
      {hex}
    </Text>
  </View>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;

const Swatches = ({ colors }) => (
  <Artboard
    name="Swatches"
    style={{
    	flex: 1,
			backgroundColor: 'white'
    }}
  >
    {Object.keys(colors).map(color => <Swatch name={color} hex={colors[color]} key={color} />)}
  </Artboard>
);

Swatches.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Swatches;
