import { Alert } from 'react-native';
import { fetchCep } from '../service/api/cepService';
import { CepData } from '../models/CepData';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useState } from 'react';

export function useCepSearch(navigation: NativeStackNavigationProp<RootStackParamList>) {
  const [numeroCEP, setNumeroCEP] = useState('');
  const [cepData, setCepData] = useState<CepData | null>(null);

  const handleSearch = async () => {
    if (!numeroCEP || numeroCEP.trim() === '' || numeroCEP.length < 9) {
      Alert.alert('Atenção', 'Por favor, digite um CEP válido!');
      return;
    }

    try {
      console.log('Iniciando busca de CEP...', numeroCEP);
      const response: CepData = await fetchCep(numeroCEP);
      setCepData(response);
      navigation.navigate('CepDetails', { cepData: response });
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro desconhecido');
    }
  };

  return {
    numeroCEP,
    setNumeroCEP,
    handleSearch,
    cepData,
  };
}
