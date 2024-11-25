import {TouchableOpacity, View} from 'react-native'
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs'

const TabBarButton = (props: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <View
        className={` bg-primary-light border-2 w-full mb-2 ${props?.accessibilityState?.selected ? ' border-secondary-main' : 'border-transparent'} `}
      />
      {props.children}
    </TouchableOpacity>
  )
}

export default TabBarButton
