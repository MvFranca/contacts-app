import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import Avatar from "../avatar";
import { useState } from "react";

export type ContactProps = {
    id: string,
    name: string,
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}

const Contact = ({contact, ...rest}: Props) => {

    const [size, setSize] = useState<"medium" | "large">("medium") ;

    function pressContact() {
        size == "medium" ? setSize("large") : setSize("medium")
    }

    return ( 
        <TouchableOpacity style={styles.container}
        onPress={pressContact}
        {...rest}
        >
            <Avatar 
            name={contact.name}
            image={contact.image} 
            variant={size}
            />
            <Text style={styles.name}>
                {contact.name}
            </Text>
        </TouchableOpacity>
     );
}
 
export default Contact;