import { TabBarButton } from "@Components/tabbar.component"
import useIcon from "@Hooks/icon.hook"
import { PATH } from "@Path"
import MemberScreen from '@Screens/member'
import MovieScreen from '@Screens/movie'
import SearchScreen from '@Screens/search'
import TvScreen from '@Screens/tv'
import { styles } from "@Styles/styles"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabBar = () => {
  const Icon = useIcon();

  return (
    <Tab.Navigator
      initialRouteName={PATH.movies}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name={PATH.movies}
        component={MovieScreen}
        options={{
          tabBarIcon: ({ color }) => (<Icon.movieIcon color={color} />),
          tabBarButton: (props) => (
            <TabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={PATH.tv}
        component={TvScreen}
        options={{
          tabBarIcon: ({ color }) => (<Icon.tvIcon color={color} />),
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