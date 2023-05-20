import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CardPokemon = ({ name, image, onPress }) => {
  const [cardColor, setCardColor] = useState('grey');

  const cardPress = () => {
    cardColor == 'grey' ? setCardColor('yellow') : setCardColor('grey');
  };

  const [handHearColor, sethandHearColor] = useState('grey');
  const handHear = () => {
    handHearColor == 'grey' ? sethandHearColor('yellow') : setCardColor('grey');
  };

  return (
    <View style={style.container}>
      <View style={style.boxPricipal}>
        <View style={style.boxCard}>
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />

          <View style={style.boxName}>
            <Text style={style.textBoxName}>{name}</Text>

            <View style={style.boxIcons}>
              <TouchableOpacity onPress={cardPress}>
                <MaterialCommunityIcons
                  name='card-account-details-star-outline'
                  size={35}
                  color={cardColor}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handHear}>
                <MaterialCommunityIcons
                  name='hand-heart'
                  size={30}
                  color={handHearColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPokemon;
