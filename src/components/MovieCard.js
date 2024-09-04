import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';


const MovieCard = ({ movie, onPress }) => {
  const imageUrl = movie.image?.medium || 'default_image_url_here';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.thumbnail} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>
        {movie.summary.replace(/<[^>]+>/g, '').substring(0, 100)}...
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginVertical: 10,
  },
  summary: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default MovieCard;
