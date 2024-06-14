import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray_100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        
        borderRadius: 18,
        height: 54,
        gap: 5,
        padding: 12,
        width: "100%"


    },
    input: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

        color: theme.colors.black,
        fontFamily: theme.fontFamily.regular
    }
})