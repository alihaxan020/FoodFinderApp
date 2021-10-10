import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = props => {
  const {term, onChangeTerm, onTermSubmitted} = props;
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onChangeTerm}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#F0EEEE',
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
