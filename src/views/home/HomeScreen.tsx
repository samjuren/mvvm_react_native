// src/views/home/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { useCepSearch } from '../../viewModels/useCepSearch';
import { styles } from './styles';
import LoadingModal from '../../views/modal/LoadingModal';

export default function HomeScreen() {
  const { cep, setCep, loading, searchCep } = useCepSearch();

  return (
    <View style={styles.container}>
      <MaskedTextInput
        value={cep}
        onChangeText={setCep}
        style={styles.input}
        placeholder="Digite seu CEP"
        mask="99999-999"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.touchableOpacity} onPress={searchCep}>
        <Text style={styles.textTouchableOpacity}>Buscar CEP</Text>
      </TouchableOpacity>
      
      <LoadingModal visible={loading} />
    </View>
  );
}
