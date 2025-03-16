import React from 'react';
import { View, ScrollView } from 'react-native';
import { TracksList } from "@/components/TracksList";
import { defaultStyles } from "@/styles";


const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
           <ScrollView>
                <TracksList scrollEnabled={false}/>
           </ScrollView>
        </View>
    )
}

export default SongsScreen