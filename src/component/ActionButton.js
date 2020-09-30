import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ActionButton = (props) => {
  const {onPress, styleBtn, styleText, textBtn} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styleBtn}>
      <Text style={styleText}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
