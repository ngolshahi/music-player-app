import React from 'react';
import { FlatList, FlatListProps, View, Text } from 'react-native';
import library from '@/assets/data/library.json';
import { TrackListItem } from './TrackListItem';
import { utilsStyles } from '@/styles';
import TrackPlayer, { Track } from 'react-native-track-player'
import FastImage from 'react-native-fast-image';
import { unknownTrackImageUri } from '@/constants/images';

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}
const ItemDivider = () => (
  <View style={{...utilsStyles.itemSeperator, marginVertical: 9, marginLeft: 60}} />
)
export const TracksList = ({tracks, ...flatListProps }: TracksListProps) => {

  const handleTrackSelect = async (track: Track) => {
    await TrackPlayer.load(track)
    await TrackPlayer.play()
    
  }
  return (
    <FlatList 
      data={tracks}
      contentContainerStyle={{paddingTop: 10, paddingBottom: 128}}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      ListEmptyComponent={<View>
        <Text style={utilsStyles.emptyContentText}>No songs found</Text>

        <FastImage
          source={{ uri : unknownTrackImageUri, priority: FastImage.priority.normal}}
          style={utilsStyles.emptyContentImage} />
      </View>}
      renderItem={({item : track}) => (
        <TrackListItem 
          track={track}
          onTrackSelect={handleTrackSelect}
        />
      )}
      {...flatListProps}
    />
  )
}