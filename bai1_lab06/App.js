import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
// import Screen3 from './screens/Screen3';
// import Screen4 from './screens/Screen4';
import ProductDetail from './components/ProductDetail';
import ColorOption from './components/ScreenColorOption'
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
