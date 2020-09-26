import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const DashboardScreen = () => {
  const [operationCal, setOperationCal] = useState('');
  const [resultCal, setResultCal] = useState('');

  let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '='],
  ];
  let rowNumber = [];

  for (let i = 0; i < 4; i++) {
    let rows = [];
    for (let j = 0; j < 3; j++) {
      rows.push(
        <TouchableOpacity
          key={numbers[i][j]}
          onPress={() => onPressBtnNumber(numbers[i][j])}
          style={styles.btn}>
          <Text style={styles.textBtn}>{numbers[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rowNumber.push(<View style={styles.rowNumber}>{rows}</View>);
  }

  const onPressBtnNumber = (text) => {
    if (text === '=') {
      return validateOperation() && calculateResult();
    }

    setOperationCal(operationCal + text);
  };

  const calculateResult = () => {
    const text = operationCal;
    // eslint-disable-next-line no-eval
    setResultCal(eval(text));
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

  let operations = ['Del', '+', '-', '*', '/'];
  let operationSign = [];

  for (let i = 0; i < 5; i++) {
    operationSign.push(
      <TouchableOpacity
        key={operations[i]}
        onPress={() => onPressBtnOperation(operations[i])}
        style={styles.btn}>
        <Text style={styles.textBtn}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }

  const onPressBtnOperation = (operation) => {
    switch (operation) {
      case 'Del':
        let text = operationCal.split('');
        text.pop();
        setOperationCal(text.join(''));

        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = operationCal.split('').pop();

        if (operations.indexOf(lastChar) === -1) {
          console.log('operation');
          return setOperationCal(operationCal + operation);
        }

        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.operationCal}>
        <Text style={styles.textOperationCal}>{operationCal}</Text>
      </View>

      <View style={styles.resultCal}>
        <Text style={styles.textResultCal}>{resultCal}</Text>
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
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10rem',
  },
  textOperationCal: {
    fontSize: '30rem',
  },
  resultCal: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '10rem',
  },
  textResultCal: {
    fontSize: '20rem',
  },
  wrapperButtons: {
    flex: 7,
    flexDirection: 'row',
  },
  numberCal: {
    flex: 3,
    backgroundColor: 'yellow',
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
    paddingVertical: '10rem',
    paddingHorizontal: '20rem',
  },
  operationSign: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
