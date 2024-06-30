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

        zIndex: 1,

        marginBottom: 32,
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
        // marginTop:32
    },

    contentList: {
        padding: 24,
        gap: 10
    },

    separator: {
        width: '100%',
        height: 1,

        backgroundColor: theme.colors.gray_300,
        marginTop: 12,
    },

    bottomSheet: {
        backgroundColor: 'transparent',
    },
    
    bottomSheetContent: {
        flex: 1,
        backgroundColor: theme.colors.gray_100,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 64,
        alignItems: "center",
        gap: 10,
        padding: 32,

    },

    image: {

        marginBottom: -50,
        zIndex: 1,
        alignSelf: "center"

    },

    contactName: {
        fontSize: 32,
        fontFamily: theme.fontFamily.bold
    },

    phoneNumber: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginBottom: 24,
    }, 
    phone: {
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.gray_400
    }
})