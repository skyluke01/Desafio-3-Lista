//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions}  from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import BandDetailsPage from './src/pages/BandDetailsPage';
import BandPage  from './src/pages/BandPage'

const Stack = createStackNavigator();

function App(){
  return(
    <View style = {style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "BandPage" >
          <Stack.Screen name = "Lista das Bandas" component = {BandPage} />
          <Stack.Screen name = "Detalhes das Bandas" component = {BandDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
)

export default App;