import HomeScreen from '@Screens/home'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Root = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default Root