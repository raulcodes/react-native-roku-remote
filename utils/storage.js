import AsyncStorage from '@react-native-community/async-storage';

export const storeIP = (ip) => {
  try {
    AsyncStorage.setItem('@IP', JSON.stringify(ip));
  } catch (error) {
    console.error(`errored storing ip: ${error}`)
  }
};