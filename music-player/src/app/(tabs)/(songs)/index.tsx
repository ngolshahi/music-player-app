import React, { useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { TracksList } from "@/components/TracksList";
import { defaultStyles } from "@/styles";
import { screenPadding } from '@/constants/tokens';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import library from "@/assets/data/library.json"
import { trackTitleFilter } from '@/helpers/filter';


const SongsScreen = () => {
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs',
        },    
    })
    
    const filteredTracks = useMemo(() => {
        if(!search) return library

        return library.filter(trackTitleFilter(search))
    }, [search])
    
    return (
        <View style={defaultStyles.container}>
           <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={{paddingHorizontal: screenPadding.horizontal}}
           >
                <TracksList tracks={filteredTracks} scrollEnabled={false}/>
           </ScrollView>
        </View>
    )
}

export default SongsScreen