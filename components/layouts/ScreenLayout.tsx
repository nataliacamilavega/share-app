import {View} from 'react-native'
import {ReactNode} from 'react'

type ScreenLayoutProps = {
  children: ReactNode
}

export default function ScreenLayout({children}: ScreenLayoutProps) {
  return <View className="flex-1 bg-primary-main ">{children}</View>
}
