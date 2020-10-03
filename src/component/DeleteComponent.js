import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ActionButton from '../component/ActionButton';

const DeleteComponent = (props) => {
  // const onPressClear = () => {
  //   props.setOperationCal;
  //   props.setResultCal;
  // };

  // const onPressDel = () => {
  //   let text = props.operationCal.split('');
  //   text.pop();
  //   setOperationCal(text.join(''));
  //   setResultCal('');
  // };

  return (
    <View style={styles.wrapperClear}>
      <ActionButton
        onPress={props.buttonClear}
        styleBtn={styles.buttonClear}
        textBtn="CLEAR"
        styleText={styles.textClear}
      />

      <ActionButton
        onPress={props.buttonDelete}
        styleBtn={styles.buttonClear}
        textBtn="DEL"
        styleText={styles.textClear}
      />
    </View>
  );
};

export default DeleteComponent;

const styles = EStyleSheet.create({
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
});
