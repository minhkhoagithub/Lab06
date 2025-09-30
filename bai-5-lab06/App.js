

import React, { useState } from 'react';
import { SafeAreaView, View, Text, Switch, StyleSheet, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


function ManHinhHome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chào mừng tới Home!</Text>
      <Text>Đây là màn hình chính (Home).</Text>
    </SafeAreaView>
  );
}

function ManHinhProfile() {
  const thongTinUser = {
    ten: 'Lê Minh Khoa',
    email: 'minhkhoa@gmail.com',
    dienThoai: '0912345678',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{thongTinUser.ten}</Text>
        <Text style={styles.info}>Email: {thongTinUser.email}</Text>
        <Text style={styles.info}>SĐT: {thongTinUser.dienThoai}</Text>
      </View>
    </SafeAreaView>
  );
}

function ManHinhSettings() {
  const [isEnabledThongBao, setIsEnabledThongBao] = useState(true);
  const [isEnabledDarkMode, setIsEnabledDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Bật thông báo</Text>
        <Switch
          value={isEnabledThongBao}
          onValueChange={setIsEnabledThongBao}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ManHinhHome} options={{ title: 'Trang chủ' }} />
        <Drawer.Screen name="Profile" component={ManHinhProfile} options={{ title: 'Thông tin cá nhân' }} />
        <Drawer.Screen name="Settings" component={ManHinhSettings} options={{ title: 'Cài đặt' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  profileCard: {
    width: '100%',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  info: {
    marginTop: 6,
  },
  settingRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
});
