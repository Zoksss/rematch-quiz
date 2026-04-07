import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.content}>
        {/* Branding */}
        <View style={styles.header}>
          <Text style={styles.title}>REMATCH_</Text>
          <View style={styles.underline} />
          <Text style={styles.subtitle}>SYSTEM: ACTIVE / USER: ARCHITECT</Text>
        </View>

        {/* Menu */}
        <View>
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>START DUEL</Text>
            <Text style={styles.primaryButtonText}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.7}>
            <Text style={styles.secondaryButtonText}>PRACTICE</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsCard}>
          <Text style={styles.statsText}>RANK: ROOT</Text>
          <Text style={styles.statsValue}>W: 0 / L: 0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  content: { flex: 1, padding: 24, justifyContent: 'space-between' },
  header: { marginTop: 40 },
  title: { color: '#2EFFA3', fontSize: 48, fontWeight: '900', fontStyle: 'italic', letterSpacing: -2 },
  underline: { hieght: 4, width: 50, backgroundColor: '#2EFFA3', marginTop: 4 },
  subtitle: { color: '#666', marginTop: 15, fontSize: 12, fontWeight: 'bold', letterSpacing: 2 },
  primaryButton: { 
    backgroundColor: '#fff', 
    padding: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 15 
  },
  primaryButtonText: { color: '#000', fontSize: 20, fontWeight: '900' },
  secondaryButton: { 
    borderWidth: 2, 
    borderColor: '#fff', 
    padding: 20, 
    alignItems: 'center' 
  },
  secondaryButtonText: { color: '#fff', fontSize: 20, fontWeight: '900' },
  statsCard: { 
    backgroundColor: '#161616', 
    padding: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333'
  },
  statsText: { color: '#666', fontWeight: 'bold' },
  statsValue: { color: '#2EFFA3', fontWeight: 'bold' }
});