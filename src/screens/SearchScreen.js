import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch movies based on the search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then(response => setMovies(response.data))
        .catch(error => console.log(error));
    } else {
      setMovies([]); 
    }
  }, [searchTerm]); 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)} 
      />
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
    backgroundColor: '#000',
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

export default SearchScreen;
