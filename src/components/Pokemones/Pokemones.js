import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import CardPokemon from '../CardPokemon/CardPokemon';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?offset=5&limit=5'
        );
        const data = await response.json();

        const updatedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            return { ...pokemonData, image: pokemonData.sprites.front_default };
          })
        );

        setPokemonList(updatedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
  }, []);

  const renderPokemon = ({ item }) => {
    return <CardPokemon name={item.name} image={item.image} />;
  };

  return (
    <View>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemon}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default PokemonList;
