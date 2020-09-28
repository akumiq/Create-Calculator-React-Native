import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ButtonNumber = (props) => {
  const {onHandlePress, textButtons} = props;

  return (
    <TouchableOpacity
      onPress={() => onHandlePress(textButtons)}
      style={styles.container}>
      <Text style={styles.textButtons}>{textButtons}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNumber;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    margin: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtons: {
    fontSize: '26rem',
    color: '#ffffff',
  },
});
