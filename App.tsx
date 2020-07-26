import React from 'react';
import Routes from './src/routes'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

export default function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  )
}