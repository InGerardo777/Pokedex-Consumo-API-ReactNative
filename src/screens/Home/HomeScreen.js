import { Text, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../Home/styles';
import Busqueda from '../../components/SearchBar/SearchBar';
import PokemonList from '././../../components/Pokemones/Pokemones';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.textBox1}>Pokemones</Text>
        <View style={styles.box2}>
          <MaterialIcons
            name='keyboard-control'
            size={30}
            color='black'
            style={{ verticalAlign: 'middle' }}
          />
        </View>
      </View>
      <Busqueda />
      <PokemonList />
    </View>
  );
};

export default HomeScreen;
