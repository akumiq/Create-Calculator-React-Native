import React from 'react';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DashboardScreen from './screens/DashboardScreen';
// import CalculatorScreen from './screens/CalculatorScreen';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  return <DashboardScreen />;
};

export default App;
