import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Button, ActivityIndicator } from "react-native";

const API_URL = "https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="tomato" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            marginBottom: 15,
            padding: 10,
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: 150, borderRadius: 8 }}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 8 }}>
            {item.name}
          </Text>
          <Text style={{ color: "gray", marginVertical: 4 }}>
            {item.description}
          </Text>
          <Button title="Yêu thích" onPress={() => console.log("Đã yêu thích:", item.name)} />
        </TouchableOpacity>
      )}
    />
  );
}
