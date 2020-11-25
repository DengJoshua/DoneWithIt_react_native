import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import TodoList from './app/components/TodoList';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#455a64" barStyle="light-content" />
      {/* <TodoList  message="First messages"  /> */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <ListingDetailsScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  users: {
    display:"flex",
    flexDirection:"column"
  }
});
