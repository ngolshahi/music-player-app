import { colors } from "@/constants/tokens";
import React from "react";
import { View, ViewProps } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons'
import { utilsStyles } from "@/styles";
import { Slider } from "react-native-awesome-slider";

export const PlayerVolumeBar = ({style}: ViewProps) => {
    const progress = useSharedValue(0)
    const min = useSharedValue(0)
    const max = useSharedValue(1)

    return <View style={style}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="volume-low" size={20} color={colors.icon} style={{opacity: 0.8}} />

            <Slider 
                        progress={progress}
                        minimumValue={min}
                        maximumValue={max}
                        containerStyle={utilsStyles.slider}
                        thumbWidth={0}
                        renderBubble={() => null}
                        theme = {{
                            minimumTrackTintColor: colors.minimumTrackTintColor,
                            maximumTrackTintColor: colors.maximumTrackTintColor,
                        }}
                        onValueChange={(value) => {
                            updateVolume(value)
                        }}
                    />
        </View>
    </View>
}