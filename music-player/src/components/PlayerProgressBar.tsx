import { colors } from "@/constants/tokens";
import { formatSecondsToMinutes } from "@/helpers/miscellaneous";
import { utilsStyles } from "@/styles";
import { View, ViewProps } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import { useProgress } from "react-native-track-player";

export const PlayerProgressBar = ({style}: ViewProps) => {
    const {duration, position} = useProgress(250)

    const isSliding = useSharedValue(false)
    const progress = useSharedValue(0)
    const min = useSharedValue(0)
    const max = useSharedValue(1)

    const trackElapsedTime = formatSecondsToMinutes(position)
    const trackRenamingTime = formatSecondsToMinutes(duration - position)

    if (!isSliding.value) {
        progress.value = duration > 0 ? position / duration : 0
    }

    return <View style={style}>
        <Slider 
            progress={progress}
            minimumValue={min}
            maximumValue={max}
            containerStyle={utilsStyles.slider}

            theme = {{
                minimumTrackTintColor: colors.minimumTrackTintColor,
                maximumTrackTintColor: colors.maximumTrackTintColor,
            }}
        />

    </View>
}