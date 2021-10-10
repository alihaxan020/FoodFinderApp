import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
const {width, height} = Dimensions.get('screen');
// api component
import yelp from '../api/yelp';
// ResultShowScreen
const ResultShowScreen = ({route}) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  //  async function to get call
  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{uri: result.image_url}}
        style={{
          width: width * 0.3,
          height: width * 0.3,
          borderRadius: (width * 0.3) / 2,
        }}
      />
      <Text style={styles.text}>{result.name}</Text>
      <View style={styles.resturantDetail}>
        <Text style={styles.detailText}>
          Rating: {result.rating} <Foundation name="star" size={16} />
        </Text>
        <Text style={styles.detailText}>Reviews: {result.review_count}</Text>
      </View>
      <View
        style={[
          styles.resturantDetail,
          {
            alignItems: 'flex-start',
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            styles.detailText,
            {
              marginLeft: 10,
            },
          ]}>
          Locations: {result.location.address1}, {result.location.city},{' '}
          {result.location.state}, {result.location.country}
        </Text>
      </View>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
  },
  resturantDetail: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  image: {
    width: width,
    height: height / 2,
    alignSelf: 'center',
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
