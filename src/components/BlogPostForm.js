import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';


const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
            value={title} 
            onChangeText={(text)=> setTitle(text)} 
            style={styles.inputTitle}/>

            <Text style={styles.label}>Enter Content:</Text>

            <TextInput value={content} 
            onChangeText={(text)=> setContent(text)} 
            style={styles.inputContent}/>
            <Button 
            title="Submit"
            color="#5CA22F" onPress={()=> onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content:''
    }
};
const styles = StyleSheet.create({
    inputTitle:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        marginBottom: 15,
        height: 30
        
    },
    inputContent:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        marginBottom: 15,
        height: 80
        
    },
    label:{
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    button:{
        backgroundColor: 'green'
    }
});

export default BlogPostForm;