import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function Tabs({ navigation }) {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        newest tabs
      </Text>
      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('tab', {
            artist: "Charli XCX",
            title: "claws",
          });
        }}
      >
        Charli XCX - claws
      </Text>
      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('tab', {
            artist: "Metallica",
            title: "Enter Sandman",
          });
        }}
      >
        Metallica - Enter Sandman
      </Text>
    </View>
  );
}

function Tab({ route, navigation }) {
  const { title, artist } = route.params;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        <Text style={styles.link}>{title}</Text>
        <Text style={styles.text}> by </Text>
        <Text
          style={styles.link}
          onPress={() => {
            navigation.navigate('tab', {
              artist: "Metallica",
              title: "Enter Sandman",
            });
          }}
        >
          {artist}
        </Text>
      </Text>
      <View>
        <Text style={styles.text}>
          tab: NYI
        </Text>
      </View>
      <Button
        title="go to tabs"
        onPress={() => navigation.navigate('tabs')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tabs">
        <Stack.Screen name="tabs" component={Tabs}/>
        <Stack.Screen name="tab" component={Tab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const colors = {
  bg: "#131313",
  dark: "#555",
  primary: "#00cc00",
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.bg,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 13,
  },
  text: {
    fontSize: 17,
    color: colors.dark,
  },
  link: {
    fontSize: 21,
    color: colors.primary,
  },
});

export default App;
