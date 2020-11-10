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
            <ScrollView style = {style.scroll}>
            <SafeAreaView>
            <Image style = {style.avatar} source = {{uri: this.state.band.imagem}} />
            <Text style = {style.texto}>Nome:</Text>
            <Text style = {style.texto}>{this.state.band.nome.banda}</Text>
            <Text style = {style.texto}>Sigla: </Text>
            <Text style = {style.texto}> {this.state.band.nome.sigla}</Text>
            <Text style = {style.texto}>Gravadora:</Text>
            <Text style = {style.texto}>{this.state.band.gravadora}</Text>
            <Text style = {style.texto}>Gênero:</Text>
            <Text style = {style.texto}> {this.state.band.genero}</Text>
            <Text style = {style.texto}>País:</Text>
            <Text style = {style.texto}>{this.state.band.país}</Text>
            <Text style = {style.texto}>Lider:</Text>
            <Text style = {style.texto}>{this.state.band.lider}</Text>
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create(
    {
      scroll: {
        flex: 1,
        backgroundColor: '#f5f5dc',  
      },
      line: {
        height: 60, borderBottomWidth: 1, borderBottomColor: '#37276B', alignItems: 'center', flexDirection: 'row'
    },
    texto: {
        fontFamily: "Cochin", fontSize: 30, textAlign: "center"
        
      },
      avatar: {
        aspectRatio: 1, margin: 70, height: 250,
    }

    }
  )
