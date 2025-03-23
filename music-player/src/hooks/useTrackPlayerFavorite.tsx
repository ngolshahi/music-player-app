import { useActiveTrack } from "react-native-track-player"

export const useTrackPlayerFavorite = () => {
    const activeTrack = useActiveTrack()

    const { favorites, toggleTrackFavorite } = useFavorites()

    const isFavorite = favorites.find((track) => track.url === activeTrack?.uril)?.rating === 1

    
}