import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import controller from '../styles/Controller_styles'

import { makeRequest } from '../utils/roku_client'

const SecondRow = () => (
  <View style={controller.secondRow}>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Back')}}
      >
      <Icon name="keyboard-backspace" size={40} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Home')}}
      >
      <Icon name="home-outline" size={40} color="white" />
      </TouchableOpacity>
    </View>
  </View>
)

export default SecondRow