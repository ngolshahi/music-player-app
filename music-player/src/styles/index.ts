import {StyleSheet} from 'react-native';
import {colors, fontSize} from '@/constants/tokens'

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text
    },
})

export const utilsStyles = StyleSheet.create({
    itemSeperator: {
        borderColor: colors.textMuted,
        borderWidth: StyleSheet.hairlineWidth,
        opacity: 0.3,
    },
    emptyContentText: {
        ...defaultStyles.text,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: 20,
    },
})