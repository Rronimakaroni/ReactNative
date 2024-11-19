import React from "react";
import {View, Text, FlatList, Stylesheet} from "react-native"

const Profile=()=>{
    const firstName="Rron";
    const lastName="Abdullahu";
    let FullName=`${firstName} ${lastName}`;
    const birthday="2009-14-12";
    const hobbies=["Reading","Coding","Hiking","Gaming"];

    return(
        <View>
            {/* Personal Info */}
            <Text>Personal Info</Text>
            <Text>Fullname: {FullName}</Text>
            <Text>birthday: {birthday}</Text>
            {/* Hobbies section */}
            <Text>Hobbies</Text>
            <FlatList
            data={hobbies}
            renderItem={({item})=><Text>{item}</Text>}/>
        </View>
    )
}

export default Profile