import Tabs from '@/components/tabs/Tabs'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Shadow } from 'react-native-shadow-2'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Tabs />
    </SafeAreaView>
  )
}
