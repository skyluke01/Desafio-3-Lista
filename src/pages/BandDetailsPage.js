import React from 'react'
import {ScrollView, Text, StyleSheet,Image, SafeAreaView} from 'react-native'

export default class BandDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "band": props.route.params.band
        }
    }
    render(){
        return(
            <ScrollView style = {style.container}>
            <SafeAreaView>
            <Image style = {style.avatar} source = {{uri: this.state.band.imagem}} />
            <Text style = {style.baseText}>Nome:</Text>
            <Text style = {style.baseText}>{this.state.band.nome.banda}</Text>
            <Text style = {style.baseText}>Sigla: </Text>
            <Text style = {style.baseText}> {this.state.band.nome.sigla}</Text>
            <Text style = {style.baseText}>Gravadora:</Text>
            <Text style = {style.baseText}>{this.state.band.gravadora}</Text>
            <Text style = {style.baseText}>Gênero:</Text>
            <Text style = {style.baseText}> {this.state.band.genero}</Text>
            <Text style = {style.baseText}>País:</Text>
            <Text style = {style.baseText}>{this.state.band.país}</Text>
            <Text style = {style.baseText}>Lider:</Text>
            <Text style = {style.baseText}>{this.state.band.lider}</Text>
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#f5f5dc',  
      },
      line: {
        height: 60, borderBottomWidth: 1, borderBottomColor: '#37276B', alignItems: 'center', flexDirection: 'row'
    },
    baseText: {
        fontFamily: "Cochin", fontSize: 30, textAlign: "center"
        
      },
      titleText: {
        fontSize: 60, 
        fontWeight: "bold"
      },
      avatar: {
        aspectRatio: 1, margin: 70, height: 250,
    }

    }
  )