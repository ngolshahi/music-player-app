import { Tabs } from 'expo-router'
import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { StyleSheet, View, Dimensions } from 'react-native'
import { FontAwesome, Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

const TabsNavigation = () => {
    const insets = useSafeAreaInsets()
    
    return (
        <Tabs 
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '700',
                    marginBottom: 5,
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderTopWidth: 0,
                    paddingBottom: insets.bottom,
                    height: 65 + insets.bottom,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: -3,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 10,
                },
                tabBarItemStyle: {
                    marginTop: 5,
                },
                tabBarBackground: () => (
                    <BlurView intensity={95} 
                        tint="dark"
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                        }}
                    />
                ),
                tabBarIconStyle: {
                    marginBottom: -3,
                },
            })}
        > 
            <Tabs.Screen 
                name="favourites" 
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={styles.iconContainer}>
                            <FontAwesome name='heart' size={focused ? 24 : 20} color={color}/>
                            {focused && <View style={styles.activeDot} />}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="playlists" 
                options={{
                    title: 'Playlists',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name='playlist-play' size={focused ? 26 : 22} color={color}/>
                            {focused && <View style={styles.activeDot} />}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name="(songs)"
                options={{
                    title: 'Songs',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={styles.iconContainer}>
                            <Ionicons name='musical-notes-sharp' size={focused ? 28 : 24} color={color}/>
                            {focused && <View style={styles.activeDot} />}
                        </View>
                    ),
                }}
            />
            <Tabs.Screen 
                name="artists"
                options={{
                    title: 'Artists',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name='users-line' size={focused ? 24 : 20} color={color}/>
                            {focused && <View style={styles.activeDot} />}
                        </View>
                    ),
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 28,
    },
    activeDot: {
        position: 'absolute',
        bottom: -8,
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.primary,
    }
})

export default TabsNavigation