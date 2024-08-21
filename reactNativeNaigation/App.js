import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDeatailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Foundation } from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favourites-context';

const stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
export default function App() {
  function DrawerNavigator() {
    return <Drawer.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: '#351401' },
      //   headerTintColor: 'white',
      //   sceneContainerStyle: { backgroundColor: '#3f2f25' }
      // }}
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Foundation name="list-thumbnails" size={size} color={color} />
          )

        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Foundation name="star" size={size} color={color} />
          )

        }}
      />
    </Drawer.Navigator>
  }
  return (
    <>

      <StatusBar style='light' />
      <FavouritesContextProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <stack.Screen
              name="Drawe"
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false
              }}
            />
            <stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <stack.Screen name="MealDetails" component={MealDeatailScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {}
});
