// src/components/LoadingModal.tsx
import React from 'react';
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
}

export default function LoadingModal({ visible }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#E15610" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
