import React from "react"
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"

const ButtonScreen=()=>{
    let counter=0;
    return <View>
        <Text>
            Button Screen
        </Text>
        <Button
        title="Click Here"
        color="purple"
        onPress={()=>console.log("Button Clicked", counter++)}
        />
        <TouchableOpacity style={stili.TouchBtn} onPress={()=>console.log("Clicked Touchable Opacity:",counter++)}>
            <Text style={stili.btnText}>Click Touchable Element</Text>
        </TouchableOpacity>
    </View>
}
const style=StyleSheet.create({
    TouchBtn:{
        backgroundColor:"red",
        marginVertical:15,
        PaddingVertical:20,
        borderRadius:6,
        marginHorizontal:20
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold"
    }
})

export default ButtonScreen;