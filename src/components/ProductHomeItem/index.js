import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

const ProductHomeItem = ({title, price, image, onPress}) => {
  return (
    //onPress được thiết lập để gọi hàm được truyền vào qua props.
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
    //Text nội dung được truyền qua props title và price
    //Image đường dẫn của hình ảnh được truyền qua props source và uri
  );
};

export default React.memo(ProductHomeItem);