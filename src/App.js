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
          initialRouteName="tabs"
          screenOptions={{
            headerStyle: styles.screenHeader,
            headerTintColor: colors.bg,
            headerTitleStyle: styles.screenHeaderTitle,
          }}
        >
          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={{title: "newest tabs"}}
          />
          <Stack.Screen
            name="tab"
            component={Tab}
            options={({ route }) => ({ title: `${route.params.title} by ${route.params.artist}` })}
          />
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
