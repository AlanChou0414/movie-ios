import { Center } from "native-base"
import { ActivityIndicator } from "react-native"

export const Loading = () => {
  return (
    <Center flex="1">
      <ActivityIndicator size="large" />
    </Center>
  )
}