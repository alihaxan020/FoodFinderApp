
# FoodFinderApp

FoodFinderApp is a React Native app. The main focus is to learn the basics concepts of react native app development. If a user want to eat pasta and search in our app. It will show all the restaurants those offering search food nearby him/her.

The main focus is to learn basics concepts of React Native.
## Installation

Download code and run following command in your terminal.
```bash
   npm install
```
    
## Features

- Search Food
- Restaurants Detail
- Price-wise show restaurants
- Restaurants Addresses



  
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## FoodFinderApp setup
Yelp's website is a crowd-sourced local business review and social networking site.
We are using yelp API to show restaurants. You need to make an account in order to use yelp API code in this project. create yelp account [here](https://www.yelp.com/developers/documentation/v3).

 Some changes needed to access server resources. Go to
 this file in project directory **src/api/yelp.js** 

 Enter your yelp API key after **'Bearer <your API KEY>'**. make sure give space between Bearer and API KEY.
```javascript
//yelp.js 
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ', //=> insert your API Key
  },
});
```

  
## Dependencies

- @react-navigation/native V6.0.4
- @react-navigation/native-stack V6.2.2
- axios V0.22.0
- react-native-vector-icons V6.6.0
- react-native-screens v3.8.0



  
