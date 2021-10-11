
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

![App Screenshot1](https://github.com/alihaxan020/FoodFinderApp/blob/main/assets/images/screenshot1.PNG?raw=true) ![App Screenshot1](https://github.com/alihaxan020/FoodFinderApp/blob/main/assets/images/Screenshot2.PNG?raw=true)
  
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

FoodFinderApp is currently targeting San Jose audience and showing them San Jose Restaurant. If you want to change location from San Jose to another city.
We can change it. Go to **src/hooks/useResults.js** and changes from san jose to your desir ciyt.

```javascript
//yelp.js 
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'san jose', //change to another city
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }

```


  
## Developed by

- [@alihaxan020](https://github.com/alihaxan020)

  
