import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './index';
import MainPage from './mainPage';
import CreateEvent from './create';
import Profile from './profile';

const Stack = createStackNavigator();

const _layout = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='index' component={HomePage} />
            <Stack.Screen name='mainPage' component={MainPage} />
            <Stack.Screen name='create' component={CreateEvent} />
            <Stack.Screen name='profile' component={Profile} />
        </Stack.Navigator>
    );
};

export default _layout;