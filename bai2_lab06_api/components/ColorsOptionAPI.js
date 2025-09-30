import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default function ScreenColorOption({ navigation }) {
  const API_URL = "https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/ColorsPhone";
  const [colorsData, setColorsData] = useState([]);  
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setColorsData(res.data);
        if (res.data.length > 0) {
          setSelectedColor(res.data[0]);
        }
      })
      .catch(err => {
        console.error("Lỗi khi fetch colors:", err);
      });
  }, []);

  if (!selectedColor) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', backgroundColor: 'white', marginBottom: 10, padding: 10, height: 150, width: '100%'}}>
        <Image
        source={{ uri: selectedColor.image }}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
      <Text style={{ marginVertical: 10 }}>{selectedColor.name}</Text>
      </View>

      <View style={styles.container}>
        <Text>Chọn một màu bên dưới:</Text>
        <View style={{ flexWrap: 'wrap', marginTop: 10 }}>
          {colorsData.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.colorBox,
                { backgroundColor: item.color || "#ccc" },
                (selectedColor.id === item.id) && styles.colorBoxSelected
              ]}
              onPress={() => {
                setSelectedColor(item);
              }}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Screen1", { colorObj: selectedColor });
        }}
      >
        <Text style={styles.btnText}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#888',
  },
  colorBoxSelected: {
    borderWidth: 3,
    borderColor: 'gold',
  },
  btn: {
    marginTop: 20,
    width: 200,
    padding: 12,
    backgroundColor: "#3F51B5",
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
});
