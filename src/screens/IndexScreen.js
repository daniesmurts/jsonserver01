import React, {useContext}from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';



const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);

    
    return(
        <View>
            <FlatList
            data={state}
            keyExtractor={(blogpost) => blogpost.title}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Ionicons style={styles.iconStyle} name="ios-trash" />
                                </TouchableOpacity>
                            
                        </View>
                    </TouchableOpacity>
                );

            }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
            <Entypo name="circle-with-plus" style={styles.headerRight}/>
        </TouchableOpacity>
        
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal:10
    },
    title:{
        fontSize:18,
    },
    iconStyle: {
        fontSize: 32,
        color: '#AF2A25'
    },
    headerRight:{
        color:"#5CA22F",
        fontSize: 30,
        marginEnd: 10
    }
});

export default IndexScreen;