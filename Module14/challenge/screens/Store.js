import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

const Store = () => {
  const [data, setData] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('ProductList'); // Track the current screen
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result); // Store API data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render Product List Screen
  const renderProductList = () => (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              setSelectedProduct(item); // Store the selected product
              setCurrentScreen('ProductDetails'); // Switch to details screen
            }}
          >
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );

  // Render Product Details Screen
  const renderProductDetails = () => (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: selectedProduct.image }} style={styles.detailsImage} />
      <Text style={styles.detailsTitle}>{selectedProduct.title}</Text>
      <Text style={styles.detailsPrice}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.detailsDescription}>{selectedProduct.description}</Text>
      <Button title="Back to Products" onPress={() => setCurrentScreen('ProductList')} />
    </View>
  );

  return currentScreen === 'ProductList' ? renderProductList() : renderProductDetails();
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  detailsImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsPrice: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  detailsDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default Store;


