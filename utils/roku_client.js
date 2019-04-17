import AsyncStorage from '@react-native-community/async-storage';

export const makeRequest = async (key) => {
    try {
        let ip = await AsyncStorage.getItem('@IP')
        let url = `http://${JSON.parse(ip)}:8060/keypress/`

        fetch(`${url}${key}`, {
            method: 'POST'
        })
        .catch(error => console.error(`Error: ${error}`));
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}
