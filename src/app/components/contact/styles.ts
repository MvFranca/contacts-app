import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 24,
        padding: 12,
        // backgroundColor: theme.colors.gray_100,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderRadius: 18
    },
    name: {
        fontFamily: theme.fontFamily.medium,
        // fontSize: 18,

        color: theme.colors.black
    }
})