import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar } from 'react-native';
import { colors } from './styles/colors';
import Tabs from './scenes/Tabs';
import Tab from './scenes/Tab';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
        <Stack.Navigator
          initialRouteName="Tabs"
          screenOptions={{
            headerStyle: styles.screenHeader,
            headerTintColor: colors.bg,
            headerTitleStyle: styles.screenHeaderTitle,
          }}
        >
          <Stack.Screen name="Tabs" component={Tabs}/>
          <Stack.Screen name="Tab" component={Tab}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    backgroundColor: colors.primary,
  },
  screenHeaderTitle: {
    fontWeight: 'bold',
  },
});

export default App;
