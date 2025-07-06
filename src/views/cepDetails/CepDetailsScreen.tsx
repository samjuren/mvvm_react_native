import React from 'react';
import { View, Text} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import {styles} from './styles'

type CepDetailsRouteProp = RouteProp<RootStackParamList, 'CepDetails'>;

export default function CepDetailsScreen() {
  const route = useRoute<CepDetailsRouteProp>();
  const { cepData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do CEP</Text>
      <Text style={styles.item}>CEP: {cepData.cep}</Text>
      <Text style={styles.item}>Logradouro: {cepData.logradouro}</Text>
      <Text style={styles.item}>Bairro: {cepData.bairro}</Text>
      <Text style={styles.item}>Cidade: {cepData.localidade}</Text>
      <Text style={styles.item}>UF: {cepData.uf}</Text>
    </View>
  );
}