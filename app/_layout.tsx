import {Stack} from 'expo-router'
import '../global.css'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#121212', // Color de fondo global
        },
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#121212', // Color de fondo global
          },
        }}
      />
    </Stack>
  )
}

export default Layout
