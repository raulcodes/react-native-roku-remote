/**
 * @format
 */

import { Navigation } from "react-native-navigation"

import Controller from './components/controller'
import Settings from './components/settings'

Navigation.registerComponent(`navigation.playground.Controller`, () => Controller);
Navigation.registerComponent(`navigation.playground.Settings`, () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: '#243447'
    }
  })

  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          currentTabIndex: 2
        },
        children: [
          {
            component: {
              name: "navigation.playground.Controller",
              options: {
                bottomTab: {
                  text: 'Remote',
                  icon: require('./utils/remote.png')
                }
              }
            }
          },
          {
            component: {
              name: "navigation.playground.Settings",
              options: {
                bottomTab: {
                  text: 'Channels',
                  icon: require('./utils/channels.png')
                }
              }
            }
          },
          {
            component: {
              name: "navigation.playground.Settings",
              options: {
                bottomTab: {
                  text: 'Settings',
                  icon: require('./utils/settings.png')
                }
              }
            }
          }
        ]
      }
    }
  })
})
