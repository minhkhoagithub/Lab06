import React, { useEffect, useState,createContext, useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const API_URL = "https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/products";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// --- Tab1: Products ---
function ProductsScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavorite = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 8 }}
          onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
        >
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Button title="Yêu thích" onPress={() => handleFavorite(item)} />
        </TouchableOpacity>
      )}
    />
  );
}

// --- Tab2: Favorites ---
function FavoritesScreen({ route }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 8 }}>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
}

// --- Tab Navigation trong Home ---
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// --- Product Details ---
function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{product.name}</Text>
      <Text style={{ marginVertical: 10 }}>{product.description}</Text>
    </View>
  );
}

// --- App ---
export default function App() {
  return (
    <FavoritesProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesProvider>
  );
}
