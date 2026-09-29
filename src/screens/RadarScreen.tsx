import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useMeshStore } from '../store/useMeshStore';

export const RadarScreen = () => {
  const { nodes, isScanning, toggleScan } = useMeshStore();

  return (
    <View style={styles.container}>
      <View style={styles.radarContainer}>
        <View style={[styles.radarCircle, isScanning && styles.radarActive]}>
          <Text style={styles.radarText}>{isScanning ? 'SCANNING MESH...' : 'RADAR PAUSED'}</Text>
        </View>
      </View>
      
      <View style={styles.headerRow}>
        <Text style={styles.title}>Active P2P Nodes ({nodes.length})</Text>
        <TouchableOpacity onPress={toggleScan} style={styles.btn}>
          <Text style={styles.btnText}>{isScanning ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={nodes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.nodeCard, item.status === 'sos' && styles.nodeSOS]}>
            <View>
              <Text style={styles.nodeName}>{item.name}</Text>
              <Text style={styles.nodeMeta}>Distance: {item.distance} | Battery: {item.battery}%</Text>
            </View>
            <View style={[styles.statusIndicator, item.status === 'sos' ? styles.bgRed : styles.bgGreen]} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  radarContainer: { height: 200, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  radarCircle: { width: 160, height: 160, borderRadius: 80, borderWidth: 2, borderColor: '#27272a', justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090b' },
  radarActive: { borderColor: '#10b981', shadowColor: '#10b981', shadowOpacity: 0.5, shadowRadius: 20, elevation: 10 },
  radarText: { color: '#10b981', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { color: '#fff', fontSize: 18, fontWeight: '600' },
  btn: { backgroundColor: '#27272a', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  btnText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  nodeCard: { backgroundColor: '#09090b', borderWidth: 1, borderColor: '#27272a', borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nodeSOS: { borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' },
  nodeName: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  nodeMeta: { color: '#a1a1aa', fontSize: 12 },
  statusIndicator: { width: 12, height: 12, borderRadius: 6 },
  bgGreen: { backgroundColor: '#10b981' },
  bgRed: { backgroundColor: '#ef4444' }
});