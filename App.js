import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import Storybook from './.storybook';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;

