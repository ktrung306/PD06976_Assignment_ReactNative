import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import Button from '../../../components/Button';

const Profile = ({navigation}) => {

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Logout"/>
            <View style={styles.input}>
            <Input label="Email" placeholder="hoten@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            </View>
            <Button 
            onPress={() => navigation.navigate('SignIn')}
            style={styles.button} 
            title="Log Out"></Button>
            <Seperator text="Hẹn gặp lại bạn"></Seperator>
            <GoogleLogin></GoogleLogin>
        </View>
    );
};
export default React.memo(Profile);