import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import VolumeModal from './volumeModal.js'

import controller from '../styles/Controller_styles'

import { makeRequest } from '../utils/roku_client'

class TopRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false
    }

    this.setVisibility = this.setVisibility.bind(this)
  }

  setVisibility(v) {
    this.setState({modalVisible: v});
  }

  render() {
    return(
      <View style={controller.topRow}>
        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
            <View style={controller.volumeView}>
              <TouchableOpacity
                title="P"
                onPress={() => { makeRequest('VolumeDown') }}
              >
                <Icon name="volume-down" size={35} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                title="P"
                onPress={() => { makeRequest('VolumeUp') }}
              >
                <Icon name="volume-up" size={35} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                title="P"
                onPress={() => { this.setVisibility(false) }}
              >
              <Icon name="close" size={35} color="black" />
              </TouchableOpacity>
            </View>
        </Modal>
        <View style={controller.buttonView}>
          <TouchableOpacity style={controller.powerButton}
            title="P"
            onPress={() => {makeRequest('Power')}}
          >
          <Icon name="power-settings-new" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View style={controller.buttonView}></View>
        <View style={controller.buttonView}></View>
        <View style={controller.buttonView}>
          <TouchableOpacity style={controller.roundButton}
            title="P"
          >
          <Icon name="search" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <View style={controller.buttonView}>
          <TouchableOpacity style={controller.roundButton}
            title="P"
            onPress={() => { this.setVisibility(true) }}
          >
          <Icon name="volume-up" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}

export default TopRow
