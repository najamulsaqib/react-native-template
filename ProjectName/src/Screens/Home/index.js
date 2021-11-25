import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import styles from './style';
const Home = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
