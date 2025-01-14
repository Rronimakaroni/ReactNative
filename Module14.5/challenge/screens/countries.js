import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import data from '../Data/countries.json';

class countries extends React.Component{

    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        this.setState({
            countries: data
        })
    }

    render(){
        <view>
            <Text style={styles.screenTitle}>Countries</Text>
            <FlatList data={this.state.countries}
                      keyExtractor = {countries => countries.id}
                      renderItem={({item}) => {
                        <View style={styles.cardWrapper}>
                            <Text>City name: {item.name}</Text>
                            <Text>Country name: {item.country}</Text>
                            <Text>City description: {item.description}</Text>
                        </View>
                      }}
            />
        </view>
    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
})

export default countries