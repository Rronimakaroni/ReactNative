import React from "react";
import {View, Text, FlatList, Stylesheet} from "react-native"

const Movie=()=>{
    const moviename="Grown Ups 2";
    const productionstudio="Happy Madison Productions";
    let fullinfo=`${moviename} ${productionstudio}`;
    const actor1="Adam Sandler";
    const actor2="Kevin  James";
    const actor3="David Spade";
    const actor4="Chris Rock";
    let actors=`${actor1} ${actor2} ${actor3} ${actor4}`;

    return(
        <View>
            {/* Main Info */}
            <Text>Main Info</Text>
            <Text>Movie: {moviename}</Text>
            <Text>Studio: {productionstudio}</Text>
            {/* Main Actors */}
            <FlatList
            data={actors}
            renderItem={({item})=>{
                return <Text>{item}</Text>
            }}/>
        </View>
    )
}

export default Movie