import { unknownTrackImageUri } from "@/constants/images"
import { fontSize } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, ViewProps } from "react-native"
import FastImage from "react-native-fast-image"
import { Track, useActiveTrack } from "react-native-track-player"
import { PlayPauseButton, SkipToNextButton } from "./PlayerControls"
import { useLastActiveTrack } from "@/hooks/useLastActiveTrack"

export const FloatingPlayer = ({style} : ViewProps) => {
    const activeTrack = useActiveTrack()
    const lastActiveTrack = useLastActiveTrack()

    const displayedTrack: Track = activeTrack ?? {
        title: 'This is just a song'
    }

    if (!displayedTrack) return null


    return <TouchableOpacity activeOpacity={0.9} style={[styles.container, style]}>
        <>
            <FastImage source={{
                uri: displayedTrack.artwork ?? unknownTrackImageUri
            }}
            style = {styles.trackArtworkImage}
            />

            <View style={styles.trackTitleContainer}>
                <Text style={styles.trackTitle}>{displayedTrack.title}</Text>
            </View>

            <View style={styles.trackControlContainer}>
                <PlayPauseButton iconSize = {24}/>
                <SkipToNextButton iconSize = {22}/>
            </View>
        </>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 0,
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10,
    },
    trackControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,
    }
})