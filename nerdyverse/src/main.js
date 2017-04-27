import React from 'react';
import PropTypes from 'prop-types';
import { render, Artboard, Text, View } from 'react-sketchapp';
import chroma from 'chroma-js';
import { Card, Swatches } from './Components';

// take a hex and give us a nice text color to put over it

const colorList = {
  Haus: '#F3F4F4',
  Night: '#333',
  Sur: '#96DBE4',
  'Sur Dark': '#24828F',
  Peach: '#EFADA0',
  'Peach Dark': '#E37059',
  Pear: '#93DAAB',
  'Pear Dark': '#2E854B',
};

const Document = ({ colors }) => (
  <View
    name="Hello"
    style={{
      flex: 1
    }}
  >
    <Swatches colors={colors} />
    <Card />
  </View>
);



export default (context) => {


  render(<Document colors={colorList} />, context.document.currentPage());
}
