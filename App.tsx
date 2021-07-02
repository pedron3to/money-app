import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './src/screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme'

export default function App() {
  return (
    // <View style={styles.container}>

    <ThemeProvider theme={theme}>
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
    // </View>
  );
}

