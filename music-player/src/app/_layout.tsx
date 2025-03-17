import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {SplashScreen, Stack} from 'expo-router'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()


const App = () => {

	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])
	
	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	return <SafeAreaProvider>
		<RootNavigation />

		<StatusBar style='auto'/>
	</SafeAreaProvider>
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{headerShown: false}}/>
		</Stack>
	)
}

export default App