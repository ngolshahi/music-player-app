import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors, fontSize } from "./tokens";
import { Platform } from "react-native";

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.background,
    },
    headerLargeTitleStyle: {
        color: colors.text,
        fontWeight: '700',
        fontSize: fontSize.xl,
    },
    headerTintColor: colors.primary,
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
    headerSearchBarOptions: {
        placeholder: 'Search...',
        headerIconColor: colors.primary,
        textColor: colors.text,
        tintColor: colors.primary,
        disableBackButtonOverride: false,
    },
    animation: 'slide_from_right',
    contentStyle: {
        backgroundColor: colors.background,
    },
    headerStyle: {
        backgroundColor: 'transparent',
    },
    headerTitleStyle: {
        fontWeight: '600',
        color: colors.text,
    },
};

// Additional options for a more minimal header style
export const MinimalStackScreen: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
    headerTintColor: colors.primary,
    headerTitle: '',
    contentStyle: {
        backgroundColor: colors.background,
    },
    animation: 'fade',
};

// Options for detail screens
export const DetailStackScreen: NativeStackNavigationOptions = {
    headerTransparent: true,
    headerBlurEffect: 'prominent',
    headerShadowVisible: false,
    headerTintColor: colors.primary,
    headerTitleStyle: {
        color: colors.text,
        fontWeight: '600',
        fontSize: fontSize.base,
    },
    contentStyle: {
        backgroundColor: colors.background,
    },
    animation: 'slide_from_bottom',
    presentation: 'modal',
};