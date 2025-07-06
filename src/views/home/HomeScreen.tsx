import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { useCepSearch } from '../../viewModels/useCepSearch';
import {styles} from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   const { numeroCEP, setNumeroCEP, handleSearch } = useCepSearch(navigation);
    return (
        <View style={styles.container}>
            <MaskedTextInput
                value={numeroCEP}
                onChangeText={setNumeroCEP}
                style={styles.input}
                placeholder="Digite seu CEP"
                mask="99999-999"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.touchableOpacity} onPress={handleSearch}>
                <Text style={styles.textTouchableOpacity}>Buscar CEP</Text>
            </TouchableOpacity>
        </View>
    );
}