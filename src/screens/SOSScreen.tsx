import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useMeshStore } from '../store/useMeshStore';

export const SOSScreen = () => {
  const broadcastSOS = useMeshStore(state => state.broadcastSOS);

  return (
    <View style={styles.container}>
      <Text style={styles.warning}>Only use in life-threatening emergencies.</Text>
      <Text style={styles.subtitle}>This will broadcast your GPS and medical profile to all mesh nodes within a 5km relay radius.</Text>
      
      <TouchableOpacity style={styles.sosButton} onPress={broadcastSOS}>
        <View style={styles.sosInner}>
          <Text style={styles.sosText}>SOS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 24, justifyContent: 'center', alignItems: 'center' },
  warning: { color: '#ef4444', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  subtitle: { color: '#a1a1aa', fontSize: 14, textAlign: 'center', marginBottom: 60, lineHeight: 22 },
  sosButton: { width: 220, height: 220, borderRadius: 110, backgroundColor: 'rgba(239, 68, 68, 0.2)', justifyContent: 'center', alignItems: 'center' },
  sosInner: { width: 180, height: 180, borderRadius: 90, backgroundColor: '#ef4444', justifyContent: 'center', alignItems: 'center', shadowColor: '#ef4444', shadowOpacity: 0.8, shadowRadius: 30, elevation: 20 },
  sosText: { color: '#fff', fontSize: 48, fontWeight: '900', letterSpacing: 4 }
});