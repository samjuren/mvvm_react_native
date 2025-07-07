// src/components/LoadingModal.tsx
import React from 'react';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';
import { styles } from './styles'

interface Props {
  visible: boolean;
}

export default function LoadingModal({ visible }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
          <ActivityIndicator 
              size="large" 
              color="#E15610" />
      </View>
    </Modal>
  );
}