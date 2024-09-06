import {Tabs} from 'expo-router'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {
  faBookmark,
  faHouse,
  faMagnifyingGlass,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import TabBarButton from '../../components/bottom-navigation/TabBarButton'

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        contentStyle: {
          backgroundColor: '#121212', // Color de fondo global
        },
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#121212',
        },
        tabBarButton: (props) => <TabBarButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <FontAwesomeIcon color={color} icon={faHouse} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => <FontAwesomeIcon color={color} icon={faMagnifyingGlass} />,
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: 'Lists',
          tabBarIcon: ({color}) => <FontAwesomeIcon color={color} icon={faBookmark} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({color}) => <FontAwesomeIcon color={color} icon={faUsers} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <FontAwesomeIcon color={color} icon={faUser} />,
        }}
      />
    </Tabs>
  )
}
