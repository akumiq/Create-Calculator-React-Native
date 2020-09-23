import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.operationCal} />

      <View style={styles.resultCal} />

      <View style={styles.wrapperButtons}>
        <View style={styles.numberCal} />

        <View style={styles.operationSign} />
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
  },
  resultCal: {
    flex: 1,
    backgroundColor: 'green',
  },
  wrapperButtons: {
    flex: 7,
    flexDirection: 'row',
  },
  numberCal: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operationSign: {
    flex: 1,
    backgroundColor: 'black',
  },
});
