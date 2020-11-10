import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import BandListItem from './BandListItem'

const BandList = props => {
    const {bands, onPressItem} = props   
    const renderItem = ({item}) =>{
        return (
            <BandListItem 
            key = {item.nome.banda}
            band = {item}
            onPressItemDetails = {onPressItem}
            />
        )
    }
    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Bandas
                </Text>
            </View>
        )
    }
    return(
        <View style = {style.container}>
            <SafeAreaView>
                <FlatList
                    data={bands}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.nome.banda}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}
const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#f5f5dc'
        },
        headerStyle: {
            flex: 1, height: 50, width: '100%', backgroundColor: "#B1BDB5", justifyContent: "center", alignItems: 'center'
        },
        titleStyle: {
            color: '#000', fontSize: 20
        }
    }
)
export default BandList