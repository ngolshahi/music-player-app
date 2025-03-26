import { colors } from "@/constants/tokens";
import React from "react";
import { View, ViewProps } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons'

export const PlayerVolumeBar = ({style}: ViewProps) => {
    const progress = useSharedValue(0)
    const min = useSharedValue(0)
    const max = useSharedValue(1)

    return <View style={style}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="volume-low" size={20} color={colors.icon} style={{opacity: 0.8}} />
        </View>
    </View>
}