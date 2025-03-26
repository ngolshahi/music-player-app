import { RepeatMode } from "react-native-track-player"
import { match } from "ts-pattern"
import { ComponentProps } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons'


type IconName = ComponentProps<typeof MaterialCommunityIcons>['name']

const repeatOrder = [
    RepeatMode.Off,
    RepeatMode.Track,
    RepeatMode.Queue,
] as const

export const PlayerRepeatToggle = () => {
    const repeatMode = RepeatMode.Off

    const icon = match(repeatMode).returnType<IconName>()
}