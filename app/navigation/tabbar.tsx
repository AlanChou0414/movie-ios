import { TabBarButton } from "@Components/tabbar.component"
import useIcon from "@Hooks/icon.hook"
import { PATH } from "@Path"
import HomeScreen from '@Screens/home'
import MemberScreen from '@Screens/member'
import { styles } from "@Styles/styles"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabBar = () => {
  const Icon = useIcon();

  return (
    <Tab.Navigator
      initialRouteName={PATH.home}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
    >
      <Tab.Screen
        name={PATH.home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => (<Icon.homeIcon />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
      {/* <Tab.Screen
        name={PATH.search}
        component={SearchScreen}
        options={{
          tabBarIcon: () => (<Icon.tabSearchIcon />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      /> */}
      <Tab.Screen
        name={PATH.member}
        component={MemberScreen}
        options={{
          tabBarIcon: () => (<Icon.memberIcon />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabBar