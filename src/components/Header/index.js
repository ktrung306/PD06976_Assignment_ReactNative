import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import Input from '../Input';
import { styles } from './styles';

const Header = ({ title}) => {
   
    return (
        <View style={styles.mainContainer}>
                <Text style={styles.title}>{title}</Text>     
        </View>
    )
}

export default React.memo(Header);