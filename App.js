import { StatusBar } from 'expo-status-bar';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import SubCategory from './components/SubCategory';
import Products from './components/Product';

export default function App() {
  const [ subCategories, setSubCategories ] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []) 

  const fetchCategory = () => {
    fetch('https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/categories')
    .then(response => response.json())
    .then(data => {
      console.log('categories data', data);
      setSubCategories(data.data[0]?.sub_categories || [])
      const id = data.data[0]?.sub_categories[0]?.id || 0;
      fetchProducts(id);
      setSelectedId(id);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const fetchProducts = (id) => {
    fetch(`https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/${id}`)
    .then(response => response.json())
    .then(data => {
      setProducts(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.category}>
       <FlatList
        horizontal= {true}
        data={subCategories}
        ListHeaderComponent = { () => (
          <View 
            style={{ height: 10, width : 5}}
          />
          
        )}
        renderItem = { (item, index) => (
          <SubCategory 
             text= {item.item.name} 
             onClickHandler={ () => { 
              console.log('Hii');
                fetchProducts(item.item.id);
                setSelectedId(item.item.id);
              }} 
             isSelected = { item.item.id == selectedId} 
             />
        )}
        keyExtractor={item => item.id}
       />
      </View>
      <View style={styles.product}>
        <FlatList 
          data = {products}
          keyExtractor={item => item.id}
          style={styles.productList}
          renderItem={ (item, index) => (
             <Products 
              title={item.item.brand}
              description={item.item.name}
              count={item.item.quantity}
              price={item.item.price}
            /> 
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  category: {
    height: 50,
    marginTop: 50
  },
  product: {
    flex: 1
  },
  productList: {
    flex: 1,
  },
});
