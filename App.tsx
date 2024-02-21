import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import Flatcards from './components/Flatcards';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello world</Text>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});
export default App;
