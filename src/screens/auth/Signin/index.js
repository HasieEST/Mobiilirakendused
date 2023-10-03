import { View } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles"
import React, { useState } from "react";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <AuthHeader title='Sign In' />
            <Input label="Name" placeholder="John Doe"></Input>
            <Input isPassword label="Password" placeholder="********"></Input>
            <Button style={styles.button} title="Sign In" />
            <Seperator text="Or sign in with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account?
            <Text style={styles.footerLink}>Sign Up</Text>
            </Text>
        </View>
    )
}

export default Signin