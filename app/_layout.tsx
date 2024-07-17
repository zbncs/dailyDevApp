import { Stack } from 'expo-router'
import { Image } from 'react-native'

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  )
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: '', headerLeft: () => <LogoTitle /> }}
      />
    </Stack>
  )
}
