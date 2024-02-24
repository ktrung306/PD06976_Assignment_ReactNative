
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, { useState} from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../../components/Header';
import {categories} from '../../../components/data/categories';
import {products} from '../../../components/data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = () => {
  const [filteredProducts] = useState(products);
  // end search
  const renderCategoryItem = ({item, index}) => {
    return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
  };
  const renderProductItem = ({item}) => {
    return <ProductHomeItem {...item} />;
  };
  return (
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