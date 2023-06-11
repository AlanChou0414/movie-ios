import { styles } from "@Styles/styles"
import { View } from "native-base"
import { TouchableOpacity } from "react-native"

export const TabBarButton = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.tabBarItemStyle}
      onPress={onPress}
    >
      <View>
        {children}
      </View>
    </TouchableOpacity>
  )
}