import { View, Text, TextInput, TouchableOpacity, Alert, SectionList } from "react-native";
import { styles } from "./styles";
import { Input } from "@/app/components/input";

import {Feather} from "@expo/vector-icons"

import { theme } from "@/theme";
import { useEffect, useState, useId, useRef } from "react";
import Contact, { ContactProps } from "@/app/components/contact";
import * as Contacts from "expo-contacts"

import BottomSheet from "@gorhom/bottom-sheet"
import Avatar from "@/app/components/avatar";
import Button from "@/app/components/button";

type SectionListDataProps = {
    title: string,
    data: ContactProps[]
}

const Home = () => {

    const [name, setName] = useState("")

    const [contacts, setContacts] = useState<SectionListDataProps[]>([])
    const [contact, setContact] = useState<Contacts.Contact>()

    const bottomSheetRef = useRef<BottomSheet>(null)

    const handleBottomSheetOpen = () => bottomSheetRef.current!.expand()

    const handleBottomSheetClose = () => bottomSheetRef.current!.snapToIndex(0)

    const handleOpenDetails = async (id: string) => {

        
        const response = await Contacts.getContactByIdAsync(id)
        setContact(response)
        handleBottomSheetOpen()
    }

    async function fetchContacts(){
        try {
            const { status } = await Contacts.requestPermissionsAsync()

            if(status === Contacts.PermissionStatus.GRANTED){

                const { data } = await Contacts.getContactsAsync({
                    name,
                    sort: "firstName"
                })

                const list = data
                .map((contact) => ({
                    id: contact.id ?? useId(),
                    name: contact.name,
                    image: contact.image
                }))
                .reduce<SectionListDataProps[]>((acc: any, item) => {

                    const firstLetter = item.name[0].toUpperCase()

                    const existinggEntry = acc.find((entry: SectionListDataProps) => {
                        entry.title === firstLetter
                    })

                    if(existinggEntry){
                        existinggEntry.data.push(item)
                    }
                    else {
                        acc.push({title: firstLetter, data: [item]})
                    }

                    return acc
                }, [])
                
                setContacts(list)
                setContact(data[0])
            }
            else{
                throw Error("Deu ruim")
            }

        }
        catch(err){
            console.log(err)
            Alert.alert("Contatos", "Não foi possível carregar os contatos.")
        }
    }

    useEffect(() => {
        fetchContacts()
    }, [name])


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

            <SectionList 
                sections={contacts}
                keyExtractor={(item) => item.id}
                
                
                renderItem={({item}) => (
                    <Contact
                    onPress={() => handleOpenDetails(item.id)}
                    contact={item}
                    /> 
                )}
                
                renderSectionHeader = {
                    ({section}) => 
                    <Text style={styles.title}>{section.title}</Text>
                }
                contentContainerStyle={styles.contentList}

                ItemSeparatorComponent={() => <View style={styles.separator}/>}

                
            />

            {
            contact?.phoneNumbers && 

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0.01, 284]}
                handleComponent={() => null}
                backgroundStyle={styles.bottomSheet}
            >
                <Avatar name={contact.name} image={contact.image} variant="large" containerStyle={styles.image}/>

         
                <View style={styles.bottomSheetContent}>
                    <Text style={styles.contactName}>
                        {
                            contact?.name
                        }
                    </Text>

                    <View style={styles.phoneNumber}>
                        <Feather name="phone" size={18} color={theme.colors.blue}/>
                        <Text style={styles.phone}>
                            {
                                contact.phoneNumbers[0].number
                            }
                        </Text>
                    </View>
                <Button title="Fechar" onPress={handleBottomSheetClose} />
                </View>
             </BottomSheet>
            }

        </View>
     );
}
 
export default Home;