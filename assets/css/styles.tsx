import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'none'
  },
  backImg: {
    width: 250,
    height: 180,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    left: 30,
    right: 30,
    backgroundColor: "#262626cc",
    borderRadius: 25,
    height: 70,
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .8,
  },
  tabBarItemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 12
  },
})