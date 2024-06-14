import { StyleSheet } from "react-native";
import {theme} from "@/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_200
    },

    header:{
        width: "100%",
        height: 132,
        paddingHorizontal: 20,

        backgroundColor: theme.colors.blue,
        color: theme.colors.gray_800,

        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },

    input: {
        marginBottom: -20,
    },
    
    title: {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,

        width: 30,
        height: 30,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 8,
        marginTop:32
    },

    contentList: {
        padding: 24,
        gap: 10
    }
})