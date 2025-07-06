import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function TricksPage({ route }) {
  const { pet } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome, {pet.name}!</Text>

      {pet.photo ? (
        <Image source={{ uri: pet.photo }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text>No photo</Text>
        </View>
      )}

      <Text style={styles.info}><Text style={styles.label}>Breed:</Text> {pet.breed}</Text>
      <Text style={styles.info}><Text style={styles.label}>DOB:</Text> {pet.dob}</Text>
      <Text style={styles.info}><Text style={styles.label}>Age:</Text> {pet.age}</Text>
      <Text style={styles.info}><Text style={styles.label}>Favourite Toy:</Text> {pet.toy}</Text>
      <Text style={styles.info}><Text style={styles.label}>Favourite Food:</Text> {pet.food}</Text>

      <Text style={{ marginTop: 30 }}>Foundation behaviors and tricks coming soon!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, alignItems: 'center', backgroundColor: '#fff', flexGrow: 1,
  },
  header: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  avatar: {
    width: 120, height: 120, borderRadius: 60, marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 120, height: 120, borderRadius: 60, backgroundColor: '#eee',
    justifyContent: 'center', alignItems: 'center', marginBottom: 20,
  },
  info: {
    fontSize: 16, marginVertical: 4,
  },
  label: {
    fontWeight: 'bold',
  },
});