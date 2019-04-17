import React from 'react'

import { View, Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import { storeIP } from '../utils/storage'
import settings from '../styles/Settings_styles'

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'IP address...'
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('@IP').then((ip) => {
      this.setState({ placeholder: JSON.parse(ip) })
    })
  }

  render() {
    return(
      <View style={settings.container}>
        <Text 
          style={settings.title}
        >Roku IP address</Text>
        <TextInput
          style={settings.ipInput} 
          placeholder={this.state.placeholder}
          placeholderTextColor="white"
          onSubmitEditing={(e) => { storeIP(e.nativeEvent.text) }}
        />
      </View>
    )
  }
}

export default Settings