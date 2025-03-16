import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import library from '@/assets/data/library.json';
import { TrackListItem } from './TrackListItem';

// Update the Track type to match your actual data structure
type Track = {
  url: string;
  title: string;
  artist: string;
  artwork: string;
  playlist: string[];
}

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks?: Track[];
  onTrackPress?: (track: Track) => void;
  activeTrackUrl?: string; // Using URL as unique identifier instead of ID
}

export const TracksList = ({ 
  tracks = library, // Use library as default if no tracks provided
  onTrackPress,
  activeTrackUrl,
  ...flatListProps 
}: TracksListProps) => {
  return (
    <FlatList 
      data={tracks}
      keyExtractor={(item) => item.url} // Use URL as the key since there's no ID
      renderItem={({ item: track }) => (
        <TrackListItem 
          track={{
            title: track.title,
            image: track.artwork,
            artist: track.artist,
          }}
          isActiveTrack={activeTrackUrl === track.url}
          onPress={() => onTrackPress?.(track)}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
      {...flatListProps}
    />
  );
};