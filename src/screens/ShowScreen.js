import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from "@expo/vector-icons";


const ShowScreen = ({navigation}) =>{
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return(
        <View style={styles.showView} >
            <Text style={styles.title} > {blogPost.title}</Text>
            <Text style={styles.content} > {blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <FontAwesome name="pencil-square-o" style={styles.headerRight}/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18,
        marginVertical: 20
    },
    content: { 
        fontSize: 16,
    },
    showView:{
        marginHorizontal: 10
    },
    headerRight:{
        color:"#5CA22F",
        fontSize: 30,
        marginEnd: 10
    }
});

export default ShowScreen;