import { View, Text, StyleSheet } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import TabItems from './TabItems'

export default function Tabs() {
  return (
    <View style={styles.root}>
      <Shadow
        distance={8}
        style={{ borderRadius: 18, height: 60 }}
        containerStyle={styles.shadowContainerStyle}
      >
        <View
          style={{
            width: '100%',
          }}
        >
          <TabItems />
        </View>
      </Shadow>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  shadowContainerStyle: {
    position: 'absolute',
    bottom: 4,
    width: '100%',
  },
})
