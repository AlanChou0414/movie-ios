import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#18181b',
  },
  backImg: {
    borderRadius: 20,
    overflow: "hidden",
  },
  tabBarStyle: {
    position: "absolute",
    bottom: 25,
    left: 25,
    right: 25,
    backgroundColor: "#27272ae6",
    borderRadius: 25,
    height: 70,
    borderTopWidth: 0
  },
  tabBarItemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 12
  },
})