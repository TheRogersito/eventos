import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UserProvider from './providers/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
