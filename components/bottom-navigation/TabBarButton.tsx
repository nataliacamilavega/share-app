import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs'

import {Theme} from '../../themes/Theme'

const TabBarButton = (props: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        className=" text-white "
        // style={{
        //   color: 'white',
        // }}
      >
        Si
      </Text>
      <View
        // style={{
        //   width: '100%',
        //   height: 6,
        //   backgroundColor: props?.accessibilityState?.selected
        //     ? Theme.tabBar.borderTopColor
        //     : 'transparent',
        // }}
        className=" bg-slate-600  border-2 border-red-500 "
      />

      {props.children}
    </TouchableOpacity>
  )
}

export default TabBarButton

const styles = StyleSheet.create({})
