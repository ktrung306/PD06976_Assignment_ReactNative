import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AddCafe from "./addCafe";
import ListCafe from "./listCafe";

const Cart = () => {
  const Stack = createNativeStackNavigator();
  return(
          <Stack.Navigator >
              <Stack.Screen name="ListCafe" component={ListCafe} />
              <Stack.Screen name="AddCafe" component={AddCafe} />
          </Stack.Navigator>
  );
};

export default React.memo(Cart);