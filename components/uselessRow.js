import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import controller from '../styles/Controller_styles'

import { makeRequest } from '../utils/roku_client'

const UselessRow = () => (
  <View style={controller.secondRow}>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('InstantReplay')}}
      >
      <MIcon name="replay" size={40} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Info')}}
      >
      <MIcon name="asterisk" size={40} color="white" />
      </TouchableOpacity>
    </View>
  </View>
)

export default UselessRow