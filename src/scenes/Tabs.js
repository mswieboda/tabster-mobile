import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from '../styles/common';
import { getNewest } from '../apis/tabs';
import TabList from '../components/TabList';

function Tabs({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (loaded || loading) {
      return;
    }

    setLoading(true);

    getNewest().then(response => {
      setTabs(response.data);

      setLoaded(true);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoaded(true);
      setLoading(false);
      setError(error.message);
    });
  }, [loaded, loading]);

  if (!loaded) {
    return <Text>loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>
        newest tabs
      </Text>
      <TabList
        navigation={navigation}
        tabs={tabs}
        renderTabText={tab => `${tab.artist} - ${tab.title}`}
      />
    </SafeAreaView>
  );
}

export default Tabs;
