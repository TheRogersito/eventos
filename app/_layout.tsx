import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './index';
import MainPage from './mainPage';
import CreateEvent from './create';
import Profile from './profile';
import Invitations from './invitations';
import UserProvider from '../providers/UserProvider';
import EventPage from './eventPage';

const Stack = createStackNavigator();

const _layout = () => {
    return (
        <UserProvider>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='index' component={HomePage} />
                <Stack.Screen name='mainPage' component={MainPage} />
                <Stack.Screen name='create' component={CreateEvent} />
                <Stack.Screen name='profile' component={Profile} />
                <Stack.Screen name='invitations' component={Invitations} />
                <Stack.Screen name='eventPage' component={EventPage} />
            </Stack.Navigator>
        </UserProvider>
    );
};

export default _layout;