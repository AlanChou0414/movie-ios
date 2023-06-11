import { TabBarButton } from "@Components/tabbar.component"
import useIcon from "@Hooks/icon.hook"
import HomeScreen from '@Screens/home'
import MemberScreen from '@Screens/member'
import SearchScreen from '@Screens/search'
import { styles } from "@Styles/styles"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabBar = () => {
  const Icon = useIcon();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (<Icon.homeIcon />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (<Icon.tabSearchIcon />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name="Member"
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