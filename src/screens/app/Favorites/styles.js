import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
  
    Header: {
      flex: 7,
      paddingTop: 160,
      justifyContent: 'center',
    },
    detail: {
      fontSize: 30,
      paddingLeft: 10,
    },
  
    body: {
      position: 'absolute',
      marginTop: 420,
      flex: 3,
      backgroundColor: 'white',
      borderRadius: 40,
      width: "100%",
      height: 400,
    },
    text: {
      textAlign: 'left',
      paddingLeft: 20,
      paddingTop: 8,
    },
    text1: {
      color: '#0000ff',
      fontSize: 20,
    },
    text2: {
      fontSize: 17,
    },
  
    footer: {
      flex: 1,
      backgroundColor: '#20B2AA',
      borderTopLeftRadius: 20, // Bo góc trái trên
      borderTopRightRadius: 20, // Bo góc phải trên
      paddingHorizontal: 20, // Thêm padding ngang
      justifyContent: 'center', // Căn giữa theo chiều dọc
      flexDirection: 'row', // Chia cột
      alignItems: 'center', // Canh giữa theo chiều ngang
    },
    footerText: {
      flex: 1, // Chiếm 1 phần 2 của footer
      color: 'white',
      fontSize: 18,
    },
    button: {
      flex: 1, // Chiếm 1 phần 2 của footer
      backgroundColor: '#FF1493',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center', // Canh giữa theo chiều ngang
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    
    // Style cho icon trái tim
    heartIcon: {
      position: 'absolute',
      width: 50,
      height: 50,
      top: '58%', // Giữa theo chiều dọc của container
      left: '80%', // Giữa theo chiều ngang của container
      marginLeft: -12, // Để căn giữa icon
      marginTop: -12, // Để căn giữa icon
      zIndex: 1, // Đảm bảo icon hiển thị trên cùng
    },
  });