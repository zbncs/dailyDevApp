import { View, Text } from 'react-native'
import {
  Foundation,
  Feather,
  Ionicons,
  FontAwesome,
  Fontisto,
} from '@expo/vector-icons'

export default function TabItems() {
  const options = [
    {
      icon: '',
      title: '',
    },
  ]
  return (
    <View>
      <Foundation name="home" size={32} />
      {/* <Feather name="search" size={32} />
      <Ionicons name="add" size={32} /> */}
      <FontAwesome name="bell-o" size={32} />
      <Fontisto name="react" size={32} />
      <Text>TabItems</Text>
    </View>
  )
}
