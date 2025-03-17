import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { Track, useActiveTrack } from 'react-native-track-player';
import { Entypo, Ionicons } from '@expo/vector-icons';

export type TrackListItemProps = {
  track: Track
  onTrackSelect: (track: Track) => void
}

export const TrackListItem = ({ track, onTrackSelect: handleTrackSelect }: TrackListItemProps) => {
  const isActiveTrack = useActiveTrack()?.url === track.url
  return (
    <TouchableHighlight
      onPress= {() => handleTrackSelect(track)}
      underlayColor={colors.background}
      style={styles.touchable}
    >
      <View style={styles.trackItemContainer}>
        <FastImage 
          source={{
            uri: track.artwork ?? unknownTrackImageUri,
            priority: FastImage.priority.normal
          }}
          style={[
            styles.trackArtworkImage,
            isActiveTrack && styles.activeTrackImage
          ]}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.textContainer}>
            <Text 
              numberOfLines={1}
              style={[
                styles.trackTitleText,
                isActiveTrack && styles.activeTrackTitle
              ]}
            >
              {track.title}
            </Text>

            {track.artist && (
              <Text numberOfLines={1} style={styles.trackArtistText}>
                {track.artist}
              </Text>
            )}
          </View>

          <Entypo name='dots-three-horizontal' size={18} color={colors.icon} />

        </View>

      </View>
    </TouchableHighlight>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 12,
    marginBottom: 8,
  },
  trackItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 8,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 56,
    height: 56,
    backgroundColor: colors.background,
  },
  activeTrackImage: {
    opacity: 0.7,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  textContainer: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: width - 100, // Prevent text overflow
  },
  activeTrackTitle: {
    color: colors.primary,
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
});