import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { supabase } from './src/lib/supabase'; // Proveri da li je putanja tačna!
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("--- SYSTEM INITIALIZING ---");

        // 1. Proveri trenutnu sesiju čim se app upali
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) console.error("AUTH_ERROR:", error.message);

            setSession(session);
            setLoading(false);

            if (session) {
                console.log("SESSION_FOUND: User is logged in as", session.user.email);
            } else {
                console.log("NO_SESSION: Redirecting to Login...");
            }
        });

        // 2. Slušaj promene (kad klikneš Login dugme u drugoj komponenti)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log("AUTH_STATE_CHANGED:", _event);
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Dok proverava bazu, prikaži loader na crnoj pozadini
    if (loading) {
        return (
            <SafeAreaProvider>
                <StatusBar barStyle="light-content" />
                {session ? <DashboardScreen /> : <LoginScreen />}
            </SafeAreaProvider>
        );
    }

    // LOGIKA PREBACIVANJA
    return session ? <DashboardScreen /> : <LoginScreen />;
}