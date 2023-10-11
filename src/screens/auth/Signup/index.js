import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles"
import React, { useState } from "react";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const onBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title='Sign up' />
                <Input label="Name" placeholder="John Doe"></Input>
                <Input label="Email" placeholder="example@email.com"></Input>
                <Input isPassword label="Password" placeholder="********"></Input>
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}> Terms </Text> & <Text style={styles.agreeTextBold}> Privacy</Text></Text>
                </View>
                <Button style={styles.button} title="Sign In" />
                <Seperator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Already have an account?
                    <Text style={styles.footerLink}>Sign In</Text>
                </Text>
            </View>
        </SafeAreaProvider>
    )
}

export default Signup