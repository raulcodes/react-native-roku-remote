/**
 * @format
 * @flow
 */

import React from 'react';
import { View } from 'react-native';

import TopRow from './topRow'
import SecondRow from './secondRow'
import NavigateRow from './navigateRow'
import UselessRow from './uselessRow'
import LastRow from './lastRow'

import styles from '../styles/App_styles'

const Controller = () => (
  <View style={styles.container}>
    <TopRow />
    <SecondRow />
    <NavigateRow />
    <UselessRow />
    <LastRow />
  </View>
)

export default Controller;
