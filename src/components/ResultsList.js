import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
const ResultsList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            //TouchableOpacity navigating to ResultShowScreen
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultShowScreen', {
                  id: item.id,
                  name: item.name,
                })
              }>
              {/* ResultsDetail Component */}
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
