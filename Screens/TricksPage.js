import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import foundationBehaviors from '../data/FoundationBehaviours';

const TricksPage = ({ route }) => {
  const { pet } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome, {pet.name}!</Text>

      <Text style={styles.sectionTitle}>Foundation Behaviors</Text>

      {foundationBehaviors.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.trickTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}

      {/* Later: add another section for Tricks */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10
  },
  card: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10
  },
  trickTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

export default TricksPage;