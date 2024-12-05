import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../screens/Cart/Cart';
import Details from '../screens/Details/Details';
import Homepage from '../screens/Home/Homepage';
import Login from '../screens/Login/Login';
import Splash from '../screens/Splash/Splash';
import Wishlist from '../screens/Wishlist/Wishlist';
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
