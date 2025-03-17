import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import library from '@/assets/data/library.json';
import { TrackListItem } from './TrackListItem';
import { utilsStyles } from '@/styles';
import { Track } from 'react-native-track-player'

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}
const ItemDivider = () => (
  <View style={{...utilsStyles.itemSeperator, marginVertical: 9, marginLeft: 60}} />
)
export const TracksList = ({tracks, ...flatListProps }: TracksListProps) => {
  return (
    <FlatList 
      data={tracks}
      contentContainerStyle={{paddingTop: 10, paddingBottom: 128}}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({item : track}) => (
        <TrackListItem 
          track={track}
        />
      )}
      {...flatListProps}
    />
  )
}