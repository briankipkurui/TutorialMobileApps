import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';

const stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpense')
            }}
          />
        )
      })}
    >
      <BottomTabs.Screen
        name='RecentExpense'
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />
        }}
      />
      <BottomTabs.Screen
        name='All Expenses'
        component={AllExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />
        }}
      />
    </BottomTabs.Navigator>

  )
}
export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}
        >
          <stack.Screen
            name='ExpenseOverview'
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name='ManageExpense'
            component={ManageExpense}
            options={{
              title: 'Manage Expenses',
              presentation: 'modal'
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}


