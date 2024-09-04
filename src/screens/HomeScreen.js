import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
    
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
          />
        )}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;
