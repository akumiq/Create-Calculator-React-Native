import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ActionButton from '../component/ActionButton';

const DashboardScreen = () => {
  const [operationCal, setOperationCal] = useState('');
  const [resultCal, setResultCal] = useState('');

  let numbers = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.', '='],
  ];
  let rowNumber = [];

  for (let i = 0; i < 4; i++) {
    let rows = [];
    for (let j = 0; j < 3; j++) {
      rows.push(
        <ActionButton
          key={numbers[i][j]}
          onPress={() => onPressBtnNumber(numbers[i][j])}
          styleBtn={styles.btn}
          textBtn={numbers[i][j]}
          styleText={styles.textBtn}
        />,
      );
    }
    rowNumber.push(
      <View key={i} style={styles.rowNumber}>
        {rows}
      </View>,
    );
  }

  const onPressBtnNumber = (text) => {
    if (text === '.') {
      return validateDot(text);
    }

    if (text === '=') {
      return validateOperation() && calculateResult();
    }

    setOperationCal(operationCal + text);
  };

  const validateDot = (text) => {
    let dot = operationCal;
    if (dot.slice(-1) !== '.') {
      setOperationCal(operationCal + text);
    }
  };

  const validateOperation = () => {
    const text = operationCal;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }

    return true;
  };

  const calculateResult = () => {
    const text = operationCal;
    // eslint-disable-next-line no-eval
    setResultCal(eval(text));
  };

  let operations = ['+', '-', '*', '/'];
  let operationSign = [];

  for (let i = 0; i < 4; i++) {
    operationSign.push(
      <ActionButton
        key={operations[i]}
        onPress={() => onPressBtnOperation(operations[i])}
        styleBtn={styles.btn}
        textBtn={operations[i]}
        styleText={styles.textBtn}
      />,
    );
  }

  const onPressBtnOperation = (operation) => {
    switch (operation) {
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = operationCal.split('').pop();

        if (operations.indexOf(lastChar) === -1) {
          return setOperationCal(operationCal + operation);
        }

        break;
      default:
        break;
    }
  };

  const onPressClear = () => {
    setOperationCal('');
    setResultCal('');
  };

  const onPressDel = () => {
    let text = operationCal.split('');
    text.pop();
    setOperationCal(text.join(''));
    setResultCal('');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      <View style={styles.operationCal}>
        <Text style={styles.textOperationCal}>{operationCal}</Text>
      </View>

      <View style={styles.resultCal}>
        <Text style={styles.textResultCal}>{resultCal}</Text>
      </View>

      <View style={styles.wrapperClear}>
        <ActionButton
          onPress={() => onPressClear()}
          styleBtn={styles.buttonClear}
          textBtn="CLEAR"
          styleText={styles.textClear}
        />

        <ActionButton
          onPress={() => onPressDel()}
          styleBtn={styles.buttonClear}
          textBtn="DEL"
          styleText={styles.textClear}
        />
      </View>

      <View style={styles.wrapperButtons}>
        <View style={styles.numberCal}>{rowNumber}</View>

        <View style={styles.operationSign}>{operationSign}</View>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  operationCal: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10rem',
  },
  textOperationCal: {
    fontSize: '70rem',
    color: '#222222',
  },
  resultCal: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10rem',
  },
  textResultCal: {
    fontSize: '50rem',
    color: '#636363',
  },
  wrapperClear: {
    flex: 1,
    backgroundColor: '#434343',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonClear: {
    flexDirection: 'row',
    paddingVertical: '10rem',
    paddingHorizontal: '40rem',
  },
  textClear: {
    fontSize: '25rem',
    color: '#ffffff',
  },
  wrapperButtons: {
    flex: 6,
    flexDirection: 'row',
  },
  numberCal: {
    flex: 3,
    backgroundColor: '#434343',
  },
  rowNumber: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: '25rem',
    color: '#ffffff',
    paddingVertical: '10rem',
    paddingHorizontal: '20rem',
  },
  operationSign: {
    flex: 1,
    backgroundColor: '#434343',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
