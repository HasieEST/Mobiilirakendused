import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles"
import React, { useState } from "react";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Signin = ({ navigation }) => {

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title='Sign In' />
                <Input label="Name" placeholder="John Doe"></Input>
                <Input isPassword label="Password" placeholder="********"></Input>
                <Button style={styles.button} title="Sign In" />
                <Seperator text="Or sign in with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Don't have an account?
                    <Text style={styles.footerLink}>Sign Up</Text>
                </Text>
            </View>
        </SafeAreaProvider>
    )
}

export default Signin