import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const BandListItem = props => {
    const {band, onPressItemDetails} = props
    const {banda} = band.nome
    return(
    <TouchableOpacity onPress={() => {
        onPressItemDetails(band)
    }}>
    <View style = {style.line}>

        <Image style = {style.avatar} 
        source = {{uri: band.imagem}} />
        <Text style = {style.lineText}
         key = {banda}>
        {`${                      toUpperFirst(banda)
                    }`}
        </Text>
    </View>
    </TouchableOpacity>

    )
}

const  style = StyleSheet.create(
    {
        line: {
            height: 60, borderBottomWidth: 1, borderBottomColor: '#000000', alignItems: 'center', flexDirection: 'row'

        },
        avatar: {
            aspectRatio: 1, marginLeft: 10, flex: 1, borderRadius: 50, //borda redonda
        },
        lineText: {
            fontSize: 20, paddingLeft: 20, flex: 7
        }
    }
)

export default BandListItem













