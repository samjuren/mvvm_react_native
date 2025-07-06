import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  item: {
    fontSize: 18,
    marginBottom: 12,
  },
});
