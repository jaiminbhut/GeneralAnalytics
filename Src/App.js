import { AppNavigator } from '@/Navigation/AppNavigator';
import { Colors, Layout } from '@/Theme';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  const theme = useColorScheme();

  const styles = StyleSheet.create({
    safe: { backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' },
  });

  return (
    <NavigationContainer theme={theme === 'dark' ? Colors.dark : Colors.light}>
      <SafeAreaView style={[Layout.fill, styles.safe]}>
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
