import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';

//thành phần CategoryBox được sử dụng để hiển thị một danh mục cụ thể
const CategoryBox = ({title, image, onPress}) => {
  return (
    //Pressable được sử dụng để tạo một vùng nhấn
    //onPress được thiết lập để gọi hàm được truyền vào qua props
    //sử dụng để hiển thị hình ảnh, với đường dẫn của hình ảnh được 
    //truyền qua props source và uri.
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