import { ViewProps } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export const PlayerVolumeBar = ({style}: ViewProps) => {
    const progress = useSharedValue(0)
    const min = useSharedValue(0)
    const max = useSharedValue(1)
}