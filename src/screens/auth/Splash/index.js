import React from "react";
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import Button from "../../../components/Button";

const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.img}
                source={require('../../../assets/splash_image.png')}
            />
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to Lungo !!</Text>
            <Text style={[styles.title, styles.innerTitle]}>Sign In or Sign Up to continue</Text>
        </View>

        <Button 
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
            title="Sign up"></Button>
        <Pressable onPress={()=>navigation.navigate('SignIn')}>
            <Text style={styles.footerText}>Sign in</Text>
        </Pressable>
        </View>
    );
};

export default Splash;