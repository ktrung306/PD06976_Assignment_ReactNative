import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AddCafe from "./addCafe";
import ListCafe from "./listCafe";

const Cart = () => {
  //createNativeStackNavigator() để quản lý điều hướng giữa các màn hình
  const Stack = createNativeStackNavigator();
  return(
          //Stack.Navigator quản lý việc chuyển đổi giữa các màn hình
          //Stack.Screen màn hình và liên kết chúng với các component
          <Stack.Navigator >
              <Stack.Screen name="ListCafe" component={ListCafe} />
              <Stack.Screen name="AddCafe" component={AddCafe} />
          </Stack.Navigator>
  );
};

export default React.memo(Cart);