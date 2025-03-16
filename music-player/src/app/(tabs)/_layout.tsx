import { Tabs } from 'expo-router'

const TabsNavigation = () => {
    return (
        <Tabs>
            <Tabs.Screen name="favourites"/>
            <Tabs.Screen name="playlists"/>
            <Tabs.Screen name="(songs)"/>
            <Tabs.Screen name="artists"/>
        </Tabs>
    )
    
}

export default TabsNavigation