import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        
    },
    letter: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white
    },
    text: {
        fontFamily: theme.fontFamily.medium
    }
})