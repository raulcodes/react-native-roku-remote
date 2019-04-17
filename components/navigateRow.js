import React, { Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';

import controller from '../styles/Controller_styles'

import { makeRequest } from '../utils/roku_client'

const NavigateRow = () => (
  <Fragment>
  <View style={controller.Up}>
    <TouchableOpacity
      text="P"
      onPress={() => {makeRequest('Up')}}
    >
      <EIcon name="chevron-thin-up" size={80} color="#243447" />
    </TouchableOpacity>
  </View>
  <View style={controller.okRow}>
    <View>
      <TouchableOpacity
        onPress={() => {makeRequest('Left')}}
      >
        <EIcon name="chevron-thin-left" size={80} color="#243447" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        style={controller.roundButtonMiddle}
        onPress={() => {makeRequest('Select')}}
      >
        <EIcon name="dot-single" size={50} color="white" />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        onPress={() => {makeRequest('Right')}}
      >
        <EIcon name="chevron-thin-right" size={80} color="#243447" />
      </TouchableOpacity>
    </View>
  </View>
  <View style={controller.Down}>
    <TouchableOpacity
      text="P"
      onPress={() => {makeRequest('Down')}}
    >
      <EIcon name="chevron-thin-down" size={80} color="#243447" />
    </TouchableOpacity>
  </View>
  </Fragment>
)

export default NavigateRow