import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.title}>tabster</Text>
            <Text style={styles.text}>
              hello world
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const colors = {
  bg: "#131313",
  dark: "#555",
  primary: "#00cc00",
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollView: {
    flex: 1,
    margin: 13
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
});

export default App;
