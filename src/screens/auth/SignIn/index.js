import React, { useState } from "react";
import { Text, View } from "react-native"
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from "../../../components/Button";

const SignIn =({navigation}) => {
    const onSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In"/>
            <View style={styles.input}>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            </View>
            <Button
            onPress={() => navigation.navigate('Tabs')}
            style={styles.button} 
            title="Sign In"></Button>
            <Seperator text="Chào mừng bạn đến SignIn"></Seperator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>
                Bạn chưa có tài khoản?
                <Text onPress={onSignUp} style={styles.footerLink}>
                    {' '}
                    Sign Up
                </Text>
            </Text>
        </View>
    );
};

export default SignIn;