import { Track } from "react-native-track-player"

interface LibraryState {
    tracks: TrackWithPlayList[]
    toggleTrackFavorite: (track: Track) => void
    addToPlaylist: (track: Track, playlistName: string) => void
}