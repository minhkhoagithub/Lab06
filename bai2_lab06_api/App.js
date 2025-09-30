import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './components/ProductDetailAPI';
import ColorOption from './components/ColorsOptionAPI'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={ProductDetail} />
        <Stack.Screen name="Screen2" component={ColorOption}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
