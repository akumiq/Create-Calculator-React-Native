import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ButtonNumber from '../component/ButtonNumber';

const CalculatorScreen = () => {
  const buttons = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '/'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '-'],
  ];

  const RenderButton = () => {
    let layoutButton = buttons.map((buttonRow, indexRow) => {
      let rowItem = buttonRow.map((buttonItem, indexItem) => {
        return <ButtonNumber key={indexItem} textButtons={buttonItem} />;
      });

      return (
        <View key={indexRow} style={styles.contentRow}>
          {rowItem}
        </View>
      );
    });

    return layoutButton;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#1e1240"
        barStyle="light-content"
      />

      <View style={styles.wrapperResult}>
        <Text style={styles.textResult}>0</Text>
      </View>

      <View style={styles.wrapperContent}>
        <RenderButton />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperResult: {
    flex: 2,
    backgroundColor: '#1e1240',
    justifyContent: 'center',
  },
  textResult: {
    fontSize: '80rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'right',
    paddingRight: '10rem',
  },
  wrapperContent: {
    flex: 6,
    backgroundColor: '#3d0075',
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
