import { Navigation } from 'react-native-navigation';
import homeIcon from '../assets/icons/home.png';
import profileIcon from '../assets/icons/profile.png';
import settingsIcon from '../assets/icons/logout.png';


export const goToHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: { // Each `tab` must be in a separate stack
            children: [
              {
                component: {
                  id: 'Home',
                  name: 'rnStarterApp.HomeScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Home'
                      }
                    }
                  }
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'Home',
                fontSize: 12,
                icon: homeIcon 
              }
            }
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  id: 'Profile',
                  name: 'rnStarterApp.ProfileScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Profile'
                      },
                      rightButtons: [
                        {
                          id: 'Settings',
                          icon: settingsIcon,
                          color: 'black'
                        }
                      ]
                    }
                  }
                }
              }
            ],
            options: {
              bottomTab: {
                text: 'Profile',
                fontSize: 12,
                icon: profileIcon
              }
            }
          }
        }
      ]  
    }
  }
});

export const goToLogin = () => Navigation.setRoot({
  root: {
    component: {
      name: 'rnStarterApp.LoginScreen',
    }
  }
});

export const goToSettings = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: 'rnStarterApp.SettingsScreen',
      options: {
        topBar: {
          title: {
            text: 'Settings'
          },
        }
      }
    }
  });
};

export const goBack = (componentId) => {
  Navigation.pop(componentId);
};
