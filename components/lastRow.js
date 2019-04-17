import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import controller from '../styles/Controller_styles'

import { makeRequest } from '../utils/roku_client'

const LastRow = () => (
  <View style={controller.lastRow}>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Rev')}}
      >
      <MIcon name="rewind" size={40} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Play')}}
      >
      <MIcon name="play-pause" size={40} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity 
        style={controller.roundButtonSide}
        title="P"
        onPress={() => {makeRequest('Fwd')}}
      >
      <MIcon name="fast-forward" size={40} color="white" />
      </TouchableOpacity>
    </View>
  </View>
)

export default LastRow