import React, { useState } from "react";
import { Button, Text, View } from "react-native"
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp =({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate('SignIn');
    };

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>
            <View style={styles.input}>
            <Input label="Name" placeholder="Example Jonh"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            </View>
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button 
            onPress={() => navigation.navigate('SignIn')}
            style={styles.button}
            title="Sign Up"></Button>
            <Seperator text={"Or sign up with"}></Seperator>
           

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>
    );
};

export default SignUp;