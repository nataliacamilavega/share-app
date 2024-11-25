import {View, Text} from 'react-native'

import Buttons from '../../components/styled/Buttons'
import ScreenLayout from '../../components/layouts/ScreenLayout'

const HomeScreen = () => {
  return (
    <ScreenLayout>
      <Text className=" text-white ">HomeScreen</Text>
      <Buttons text={'texto'} />
    </ScreenLayout>
  )
}

export default HomeScreen
