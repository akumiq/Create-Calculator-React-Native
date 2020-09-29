import React, {useState} from 'react';
import {StatusBar, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ButtonNumber from '../component/ButtonNumber';

const CalculatorScreen = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);

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
        return (
          <ButtonNumber
            key={indexItem}
            textButtons={buttonItem}
            onHandlePress={() => OnPressButton(buttonItem)}
          />
        );
      });

      return (
        <View key={indexRow} style={styles.contentRow}>
          {rowItem}
        </View>
      );
    });

    return layoutButton;
  };

  const OnPressButton = (input) => {
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setDisplayValue(displayValue === '0' ? input : displayValue + input);
        break;
      case '*':
      case '/':
      case '+':
      case '-':
        setOperator(input);
        setDisplayValue(
          (operator !== null
            ? displayValue.substr(0, displayValue.length - 1)
            : displayValue) + input,
        );
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#1e1240"
        barStyle="light-content"
      />

      <View style={styles.wrapperResult}>
        <Text style={styles.textResult}>{displayValue}</Text>
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
