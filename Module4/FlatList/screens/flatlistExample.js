import React from "react"
import {Text, Stylesheet, View, FlatList} from "react-native"

const students=[
    {name:"Arianit", age:17},
    {name:"Rron", age:14},
    {name:"Orkide", age:14},
    {name:"Amar", age:12},
    {name:"Festim", age:17}
]
const FlatListExample=()=>{
return<View>
    <Text style={stili.textEdit}>This is the Flatlist Screen</Text>
    <FlatList
    data={students}
    renderItem={({item})=>{
        return <Text>{item.name} - {item.age}</Text>
    }}/>
</View>
}
const stili=StyleSheet.create({
    textEdit:{
        fontSize:20,
        backgroundColor:'blue'
    }
})
export default FlatListExample;