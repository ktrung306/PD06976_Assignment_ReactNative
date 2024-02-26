
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../../components/Header';
import {categories} from '../../../components/data/categories';
import {products} from '../../../components/data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
//Là giao diện trang chủ 
const Home = () => {
  //filteredProducts là trạng thái hiện tại
  const [filteredProducts] = useState(products);
  /* renderCategoryItem là một hàm được sử dụng để
  hiển thị sản phẩm (CategoryBox) thông qua mảng categories.*/
  const renderCategoryItem = ({item}) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };
  /*renderProductItem là một hàm được sử dụng 
  hiển thị sản phẩm (ProductHomeItem) thông qua mảng filteredProducts.*/
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };
  return (
    //FlatList Hiển thị ds sản phẩm hàng ngang 
    //FlatList Hiển thị ds sản phẩm một lưới với 2 cột.
    <SafeAreaView>
      <Header title="Giới thiệu sản phẩm"/>
      <FlatList showsHorizontalScrollIndicator={false} style={styles.list}
        horizontal data={categories} renderItem={renderCategoryItem} 
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        style={styles.productsList} numColumns={2}  data={filteredProducts} 
        renderItem={renderProductItem} keyExtractor={item => String(item.id)} 
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);