import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ColorOption from './ScreenColorOption'
export default function ProductDetail({ navigation, route }) {
  const selectedColor = route?.params?.color || "#00BCD4";
   const colorToImage = {
    "#00BCD4": require('../assets/vs_blue.png'),
    "#FF0000": require('../assets/vs_red.png'),
    "#000000": require('../assets/vs_black.png'),
    "#C0C0C0": require('../assets/vs_silver.png'),
  };

  return (
    <View style={styles.container}>
      <Image source={colorToImage[selectedColor]} style={styles.image} resizeMode="contain" />
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.priceOld}>1.790.000 đ</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}> Ở đâu rẻ hơn hoàn tiền</Text>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.btnText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.buttonMua}>
        <Text style={styles.btnTextMua}>Mua</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 200, height: 300 },
  price: { color: "red", fontSize: 18, marginVertical: 10 },
  priceOld: {justifyContent:'center', paddingLeft: 20, textDecorationLine: "line-through"},
  button: { 
    backgroundColor: "#ddd", 
    padding: 15, 
    borderRadius: 10, 
    marginTop: 20, 
    borderColor: 'gray' ,
    width: 300,
    alignItems: 'center'
    },
  buttonMua:{backgroundColor:'red', padding: 10, borderRadius: 10, marginTop: 50 , width:300,
          alignItems: 'center'
  },
  btnText: { fontWeight: "bold" },
  btnTextMua: {color: 'white', fontWeight: "bold", fontSize: 20}
});
