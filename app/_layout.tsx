import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './index';
import MainPage from './mainPage';
import { View } from 'react-native';

const Stack = createStackNavigator();

const _layout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='mainPage' component={MainPage} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='index' component={HomePage} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
};

export default _layout;