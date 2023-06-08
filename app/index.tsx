import HomeScreen from '@Screens/home'
import store from '@Store/configureStore'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

const Root = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NativeBaseProvider>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  )
}

export default Root