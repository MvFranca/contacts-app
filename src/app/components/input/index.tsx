import { TextInput, TextInputProps, View, ViewProps } from "react-native";

import { styles } from "./styles";

const Input = ({children, style}: ViewProps) => {
    return ( 
        <View style={[styles.container, style]}>
            {children}
        </View>
     );
}

const Field = ({ ...rest }:TextInputProps) => {
    return ( 
        <TextInput {...rest} style={styles.input} />
     );
}

Input.Field = Field;


 
export {Input}