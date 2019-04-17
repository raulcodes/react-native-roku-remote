import { StyleSheet } from 'react-native'
import colors from './colors'

const settings = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.darkerBlue,
  },  
  title: {
    marginTop: 20,
    fontSize: 20,
    color: colors.white
  },
  ipInput: {
    height: 40,
    marginTop: 20,
    paddingLeft: 15,
    opacity: 0.5,
    backgroundColor: colors.darkBlue,
    color: colors.white
  }
})

export default settings