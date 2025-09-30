import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

export default function ScreenColorOption({ navigation }) {
  const colors = ["#00BCD4", "#FF0000", "#000000", "#C0C0C0"];

  const [selectedColor, setSelectedColor] = useState("#00BCD4");
  const colorToImage = {
    "#00BCD4": require('../assets/vs_blue.png'),
    "#FF0000": require('../assets/vs_red.png'),
    "#000000": require('../assets/vs_black.png'),
    "#C0C0C0": require('../assets/vs_silver.png'),
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.productBox}>
        <Image source={colorToImage[selectedColor]} style={{ width: 100, height: 100, resizeMode: "contain" }}/>
        <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={styles.container}>
        <Text style={{alignItems: 'flex-start'}}>Chọn một màu bên dưới:</Text>
        {colors.map((c, i) => (
          <TouchableOpacity 
            key={i} 
            style={[styles.colorBox, { backgroundColor: c }]} 
            onPress={() => {
              setSelectedColor(c);
              
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.btn}
        onPress = {()=>{navigation.navigate("Screen1", { color: selectedColor });}}>Xong
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  marginTop: 20, alignItems:'center', marginBottom: 25 },
  colorBox: { width: 60, height: 60, margin: 10, borderRadius: 8 },
  productBox :{flexDirection: 'row', backgroundColor: 'white', marginBottom: 20, padding: 10, height: 150}, 
  btn: {color: 'white', fontWeight: 'bold', fontSize: 20, width: 250, padding: 10, alignItems: 'center', backgroundColor: '#3F51B5', borderRadius: 15}
});
