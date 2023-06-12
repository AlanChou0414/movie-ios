import { styles } from "@Styles/styles"
import { TouchableOpacity } from "react-native"

export const TabBarButton = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.tabBarItemStyle}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}