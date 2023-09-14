import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen';
import Explore from './screens/ExploreScreen';
import Search from './screens/SearchScreen';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 2, arginTop: 15}}>
      <Login/>
      <Button
        title="Ga naar Explore"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Explore', {
          });
        }}
      />
    </View>
  );
}

function ExploreScreen({ route, navigation }) {
  return (
    <View>
      <Explore/>
      <Button title="terug" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SearchScreen({ route, navigation }) {
  return (
    <View >
      <Search/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Explore" options={{ headerShown: false }} component={ExploreScreen} />
        <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}