import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useSelector} from 'react-redux';

const Orders = ({navigation}) => {
  const ordersList = useSelector(state => state.order);
  console.log(ordersList);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/arrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={ordersList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.orderItem}>
              <FlatList
                data={item.items}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.productItem}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.itemImage}
                      />
                      <View style={styles.nameView}>
                        <Text>
                          {item.title.length > 20
                            ? item.title.substring(0, 20)
                            : item.title}
                        </Text>
                        <Text>
                          {item.description.length > 20
                            ? item.description.substring(0, 30)
                            : item.description}
                        </Text>
                        <Text style={{color: 'green'}}>
                          {'Rs. ' + item.price}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderItem: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 10,
    borderColor: '#gray',
  },
  productItem: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  nameView: {
    marginLeft: 10,
  },
});
