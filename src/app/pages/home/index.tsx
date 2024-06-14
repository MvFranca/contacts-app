import { View, Text, TextInput, TouchableOpacity, Alert, SectionList } from "react-native";
import { styles } from "./styles";
import { Input } from "@/app/components/input";

import {Feather} from "@expo/vector-icons"

import { theme } from "@/theme";
import { useEffect, useState } from "react";
import Contact from "@/app/components/contact";
import * as Contacts from "expo-contacts"


const Home = () => {

    const [name, setName] = useState("")

    const [contacts, setContacts] = useState<Contacts.Contact[]>([])

    async function fetchContacts(){
        try {
            const { status } = await Contacts.requestPermissionsAsync()

            if(status === Contacts.PermissionStatus.GRANTED){

                const { data } = await Contacts.getContactsAsync()

                setContacts(data)
                // setContacts(data.image)


            }

        }
        catch(err){
            console.log(err)
            Alert.alert("Contatos", "Não foi possível carregar os contatos.")
        }
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    useEffect(() => {
        console.log(contacts)

    }, [contacts])


    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" color={theme.colors.gray_400} size={16}/>

                    <Input.Field placeholder="Buscar contato"  placeholderTextColor={theme.colors.gray_400}
                        onChangeText={setName}
                        value={name}
                    />

                    <TouchableOpacity onPress={() => setName("")}>
                        <Feather name="x" color={theme.colors.gray_400} size={16}/>
                    </TouchableOpacity>
                </Input>
            </View>


            {/* <Contact
                                key={index}
                                contact={{
                                    name: `${contact.name}`,
                                    image: require(`${contact.image.uri}`)
                                }}
                            />   */}

            <SectionList 
                sections={[ { title: "M", data: [{id: "1", name: "Marcos"},{id: "2", name: "Márcio"}]} ]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Contact
                    contact={{
                        name: `${item.name}`,
                        // image: require(`${item.image.uri}`)
                        }}
                    /> 
                )}
                renderSectionHeader = {({section}) => <Text style={styles.title}>{section.title}</Text>}

                contentContainerStyle={styles.contentList}
            />


        </View>
     );
}
 
export default Home;