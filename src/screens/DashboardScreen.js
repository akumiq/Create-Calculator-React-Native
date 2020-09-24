import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const DashboardScreen = () => {
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
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>{numbers[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rowNumber.push(<View style={styles.rowNumber}>{rows}</View>);
  }

  let operation = ['+', '-', '*', '/'];
  let operationSign = [];

  for (let i = 0; i < 4; i++) {
    operationSign.push(
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>{operation[i]}</Text>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.operationCal}>
        <Text style={styles.textOperationCal}>11*11</Text>
      </View>

      <View style={styles.resultCal}>
        <Text style={styles.textResultCal}>121</Text>
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
