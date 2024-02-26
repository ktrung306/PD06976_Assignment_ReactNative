import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import React, { useEffect, useState } from "react";
// hiển thị danh sách người dùng
const ListCafe = ({ navigation }) => {
  //lưu trữ danh sách người dùng data
  //trạng thái của dialog (openDialog
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  //getAPI là hàm để gọi API để lấy danh sách người dùng gửi lên server
  const getAPI = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  // handleDelete là hàm để xóa một người dùng dựa trên id
  const handleDelete = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      getAPI();
    }
  };
  //handleUpdate là hàm để mở dialog cập nhật thông tin người dùng
  const handleUpdate = data => {
    setOpenDialog(true);
    setSelectedUser(data);
    console.log('update');
  };
  // Effect này được sử dụng để gọi getAPI()
  React.useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getAPI();
    });
    return focusHandler;
  }, [navigation]);

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.buttonNew}
        onPress={() => navigation.navigate('AddCafe')}>
        <Text style={styles.buttonText}>Thêm loại</Text>
      </TouchableOpacity>

      {data.length ?
        data.map((item, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.containerText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.birthday}>{item.birthday}</Text>
            </View>
            <View style={styles.containerButton}>
              
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => handleUpdate(item)}>
                  Cập nhật
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => handleDelete(item.id)}>
                  Xoá
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )) :
        null}
        
        <Modal visible = {openDialog} transparent ={true}>
            <UpdateModel
                setOpenDialog = {setOpenDialog}
                selectedUser = {selectedUser}
                getAPI = {getAPI}>
            </UpdateModel>
        </Modal>
    </ScrollView>
    //để hiển thị UpdateModel khi openDialog là true.
  );
};

/*-------------------update------------------------*/
const UpdateModel = props => {
    // lưu trữ tên và ngày sinh của người dùng được cập nhật
    const [name, setName] = useState(undefined);
    const [birthday, setBirthday] = useState(undefined);
    //hàm Effect này được sử dụng để cập nhật giá trị của name và birthday khi selectedUser thay đổi
    useEffect(()=>{
        if(props.selectedUser) {
            setName(props.selectedUser.name);
            setBirthday(props.selectedUser.birthday);
        }
    }, [props.selectedUser]);
    //Hàm này gửi yêu cầu cập nhật thông tin người dùng 
    const updateUser = async()=>{
        const url = 'http://10.0.2.2:3000/users';
        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
        method: 'Put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, birthday}),
        });
        result = await result.json();
        if(result) {
            props.getAPI();
            props.setOpenDialog(false);
        }
    };
    return(
      //TextInput: Để nhập tên và ngày sinh mới của người dùng
      //TouchableOpacity: Được sử dụng cho các nút "Update" và "Close" trong modal.
        <View style={styles.modelContent}>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                value={name}
                onChangeText={text => setName(text) }></TextInput>
                <TextInput
                style={styles.input}
                placeholder="Enter birthday"
                value={birthday}
                onChangeText={text => setBirthday(text)}></TextInput>
        
        <View style = {styles.buttonGroup}>
            <TouchableOpacity style = {styles.button} onPress={updateUser}>
                <Text style = {styles.buttonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}>
                <Text 
                    style = {styles.buttonText}
                    onPress={() => props.setOpenDialog(false)}>
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};
export default ListCafe;