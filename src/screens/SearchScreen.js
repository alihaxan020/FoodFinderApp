// SearchScreen
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  // custom useHook useResults
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.container}>
      {/* Search bar component call*/}
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        {/* ResultsList Component */}
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice('$')}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultByPrice('$$')}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultByPrice('$')}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
