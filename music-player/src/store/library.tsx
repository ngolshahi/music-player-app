import { Track } from "react-native-track-player"
import library from '@/assets/data/library.json'
import { Artist, Playlist, TrackWithPlaylist } from '@/helpers/types'

interface LibraryState {
    tracks: TrackWithPlaylist[]
    toggleTrackFavorite: (track: Track) => void
    addToPlaylist: (track: Track, playlistName: string) => void
}