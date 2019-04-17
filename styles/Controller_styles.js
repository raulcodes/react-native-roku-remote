import { StyleSheet } from 'react-native'
import colors from './colors'

const controller = StyleSheet.create({
  topRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 100,
    paddingTop:40,
  },
  secondRow: {
    flex: 0,
    height: 100,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  okRow: {
    flex: 0,
    height: 110,
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lastRow: {
    flex: 0,
    height: 100,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  Up: {
    flex: 0,
    height: 70,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  Down: {
    flex: 0,
    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  powerButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    backgroundColor: colors.red,
    borderRadius:50,
  },
  roundButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:50,
  },
  roundButtonSide: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor: colors.blue,
    borderRadius:50,
    marginTop: 40
  }, 
  roundButtonMiddle: {
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    marginLeft:35,
    marginRight:35,
    backgroundColor: colors.blue,
    borderRadius:50
  },
  buttonView: {
    height: 80
  },
  volumeView: {
    marginTop: 40,
    marginLeft: 120,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    height: 60,
    width: 250,
    backgroundColor: colors.white,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default controller