import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { supabase } from '../lib/supabase'; // Samo jedna tačka manje!

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.content}
      >
        <View>
          <Text style={styles.logo}>REMATCH_</Text>
          <Text style={styles.tagline}>AUTHENTICATION_REQUIRED</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>EMAIL_ADDRESS</Text>
            <TextInput
              style={styles.input}
              placeholder="user@rematch.sys"
              placeholderTextColor="#333"
              value={email}
              onChangeText={setEmail}
              autoCapitalize={'none'}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>ACCESS_CODE</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#333"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              autoCapitalize={'none'}
            />
          </View>

          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => signInWithEmail()}
            disabled={loading}
          >
            <Text style={styles.loginButtonText}>
              {loading ? 'CONNECTING...' : 'INITIALIZE_LOGIN'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  content: { flex: 1, padding: 30, justifyContent: 'center' },
  logo: { color: '#2EFFA3', fontSize: 40, fontWeight: '900', fontStyle: 'italic' },
  tagline: { color: '#666', fontSize: 10, letterSpacing: 2, marginBottom: 50 },
  form: { gap: 25 },
  inputGroup: { gap: 8 },
  label: { color: '#2EFFA3', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  input: { 
    borderWidth: 2, 
    borderColor: '#fff', 
    padding: 18, 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  loginButton: { 
    backgroundColor: '#fff', 
    padding: 20, 
    alignItems: 'center',
    marginTop: 10 
  },
  loginButtonText: { color: '#000', fontSize: 18, fontWeight: '900' }
});