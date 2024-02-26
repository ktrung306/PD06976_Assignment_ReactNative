import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const CategoryBox = ({title, image, onPress}) => {
  return (
    //onPress được thiết lập để gọi hàm được truyền vào qua
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
    //Text nội dung được truyền qua props title.
  );
};

export default React.memo(CategoryBox);