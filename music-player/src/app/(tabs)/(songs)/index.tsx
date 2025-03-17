import React from 'react';
import { View, ScrollView } from 'react-native';
import { TracksList } from "@/components/TracksList";
import { defaultStyles } from "@/styles";
import { screenPadding } from '@/constants/tokens';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';


const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs',
        },    
    })
    
    return (
        <View style={defaultStyles.container}>
           <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={{paddingHorizontal: screenPadding.horizontal}}
           >
                <TracksList scrollEnabled={false}/>
           </ScrollView>
        </View>
    )
}

export default SongsScreen