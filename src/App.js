import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  return (
    <View>
      <Text>First Screen</Text>
    </View>
  );
};

export default App;
