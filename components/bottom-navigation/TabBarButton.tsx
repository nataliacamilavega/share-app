import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs'

import {Theme} from '../../themes/Theme'

const TabBarButton = (props: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        className=" text-white " 

      >
      </Text>
      <View

        className=" bg-slate-600  border-2 border-red-500 "
      />
      {props.children}
    </TouchableOpacity>
  )
}

export default TabBarButton

const styles = StyleSheet.create({})
