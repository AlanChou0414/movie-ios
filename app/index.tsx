import TabBar from '@Navigation/tabbar'
import store from '@Store/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

const Root = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <SafeAreaProvider>
            <TabBar />
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

export default Root