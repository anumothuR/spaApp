// TopReviews.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopReviews = ({ reviews }) => {
  const topReviews = reviews.slice(0, 3); // Get the top 3 reviews
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Reviews</Text>
      {topReviews.map((review, index) => (
        <View key={index} style={styles.review}>
          <Text style={styles.reviewText}>{review}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default TopReviews;
