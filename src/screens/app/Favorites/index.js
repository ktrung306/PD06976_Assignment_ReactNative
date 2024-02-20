import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ImageBackground, StatusBar, TouchableOpacity, View } from 'react-native';
function Favorites() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        source={require('../../../assets/cafe.png')} // Adjust the path to match the actual location of the image
        style={styles.Header}>
      </ImageBackground>

      <View style={styles.body}>
        <View>
          <Text style={styles.text}>
            <Text style={styles.text1}>Cà Phê Cherry {'\n\n'}</Text>
            <Text style={styles.text2}>Cà phê Cherry là một trong những “đứa con” quý hiếm của núi rừng Tây Nguyên. 
            Sở dĩ nói như vậy bởi đây là một trong những giống cà phê mang hương vị rất khác lạ và hiện nay xuất hiện 
            trên thế giới với số lượng rất khan hiếm Hạt cà phê Cherry vàng sáng bóng, mùi thơm thoang thoảng như 
            mít hòa quyện vị chua chua của cherry...</Text>
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>$4.20</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Yêu thích</Text>
        </TouchableOpacity>
      </View>

      {/* Thêm icon trái tim */}
      <Image source={require('../../../assets/hatnhan.png')} style={styles.heartIcon} />
    </View>
  );
};

export default Favorites;
