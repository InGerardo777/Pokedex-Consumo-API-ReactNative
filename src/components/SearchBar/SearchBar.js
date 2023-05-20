import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const Busqueda = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor='black' placeholder='Search' />
    </View>
  );
};

export default Busqueda;
