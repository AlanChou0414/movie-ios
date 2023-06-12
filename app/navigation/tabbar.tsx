import { TabBarButton } from "@Components/tabbar.component"
import useIcon from "@Hooks/icon.hook"
import { PATH } from "@Path"
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
      initialRouteName={PATH.home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name={PATH.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (<Icon.homeIcon color={color} />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={PATH.search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (<Icon.tabSearchIcon color={color} />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen
        name={PATH.member}
        component={MemberScreen}
        options={{
          tabBarIcon: ({ color }) => (<Icon.memberIcon color={color} />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabBar