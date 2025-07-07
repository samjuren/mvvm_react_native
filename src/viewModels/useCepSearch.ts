// src/viewmodels/useCepSearch.ts
import { useState } from 'react';
import { Alert } from 'react-native';
import { fetchCep } from '../service/api/cepService';
import { useNavigation } from '@react-navigation/native';

export function useCepSearch() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  const searchCep = async () => {
    if (!cep || cep.trim().length < 9) {
      Alert.alert('Atenção', 'Digite um CEP válido');
      return;
    }

    try {
      setLoading(true);
      const data = await fetchCep(cep);
      setLoading(false);
      navigation.navigate('CepDetails', { cepData: data });
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Erro', error.message || 'Erro ao buscar CEP');
    }
  };

  return { cep, setCep, loading, searchCep };
}
