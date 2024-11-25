import {Tabs} from 'expo-router'
import {Bookmarks, UserCircle, UsersThree, MagnifyingGlass, House} from 'phosphor-react-native'

import TabBarButton from '../../components/bottom-navigation/TabBarButton'
import {Theme} from '../../theme/Theme'

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.primary.main,
        },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Theme.colors.primary.main,
          paddingTop: 3,
        },

        tabBarButton: (props) => <TabBarButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <House color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => <MagnifyingGlass color={color} />,
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: 'Lists',
          tabBarIcon: ({color}) => <Bookmarks color={color} />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({color}) => <UsersThree color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <UserCircle color={color} />,
        }}
      />
    </Tabs>
  )
}
