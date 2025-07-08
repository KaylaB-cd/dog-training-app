import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TricksPage from './Screens/TricksPage';

export default function PetRegistrationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');
  const [food, setFood] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (dob) calculateAge(dob);
  }, [dob]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const years = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    const finalAge = months < 0 ? `${years - 1}y ${12 + months}m` : `${years}y ${months}m`;
    setAge(finalAge);
  };

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Permission is required to access photos!');
        return;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register Your Pet</Text>

      <TouchableOpacity onPress={pickImage}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={{ color: '#999' }}>Tap to add photo</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Pet Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Date of Birth (YYYY-MM-DD)" value={dob} onChangeText={setDob} />
      {age ? <Text>Age: {age}</Text> : null}
      <TextInput style={styles.input} placeholder="Breed" value={breed} onChangeText={setBreed} />
      <TextInput style={styles.input} placeholder="Favourite Toy" value={toy} onChangeText={setToy} />
      <TextInput style={styles.input} placeholder="Favourite Food" value={food} onChangeText={setFood} />

      <Button
        title="Go to Training"
        onPress={() => navigation.navigate('TricksPage', {
          pet: { name, dob, breed, toy, food, age, photo }
        })}
        disabled={!name || !dob}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#fff',
  },
  header: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center',
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 8,
  },
  avatar: {
    width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 120, height: 120, borderRadius: 60, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 10,
  }
});