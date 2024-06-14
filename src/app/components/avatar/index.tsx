import { Image, ImageProps, Text, View } from "react-native";
import { styles } from "./styles";

const variants = {
    size: {

        medium: {
            width: 54,
            height: 54,
            borderRadius: 18
        },
        large: {
            width: 100,
            height: 100,
            borderRadius: 32
        },

    },
    text: {
        medium: {
            fontSize: 24,
        },
        large: {
            fontSize: 50,
        },
    }
}

type Props = {
    image?: ImageProps;
    name: string;
    variant?: "medium" | "large"
}


const Avatar = ({image, name, variant = "medium"}: Props) => {

 
    return (
        <View style={styles.container}>
            {
                image ?
                <Image source={image} 
                 style={variants.size[variant]}
                 />

                :
                <View style={[styles.letter, variants.size[variant]]}>
                    <Text
                    style={[styles.text, variants.text[variant]]}
                    >
                        {
                            name[0].toUpperCase()
                        }
                    </Text>
                </View>
            }
        </View>
     );
     

}
 
export default Avatar;