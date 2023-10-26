import React, { useState } from "react";
import { View, Text, Linking, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import Header from "../../../components/Header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import { styles } from "./styles";
import EditableBox from "../../../components/EditableBox";

const Settings = () => {

    const [editing, setEditing] = useState(false);
    const [values, setValues] = useState({name: 'User', email: 'user@mail.com'})

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }
    
    const onSave = () => {
        setEditing(false)
    }

    const onEditPress = () => {
        console.log(editing)
        setEditing(true)
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Settings" />
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox label="Name" onChangeText={(v)=> onChange('name', v)} value={values.name} editable={editing} />
                <EditableBox label="Email" onChangeText={(v)=> onChange('email', v)} value={values.email} editable={editing}/>
                {editing ? (<Button style={styles.button} onPress={onSave} title="Save"/>): null}

                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </View>

        </SafeAreaView>
    )
}
export default React.memo(Settings)