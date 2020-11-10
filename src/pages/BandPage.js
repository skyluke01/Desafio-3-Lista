import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BandList from '../component/BandList';

export default class BandPage extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      bands:[]
    }
  }
  componentDidMount(){
    axios.get("https://demo7701647.mockable.io/api-lista")
    .then(response => {
      const {results} = response.data
      this.setState({
        bands: results
      })
    })
  }
  render(){
    return(
      <View>
        <BandList bands = {this.state.bands}
        onPressItem = {(band) => {
            this.props.navigation.navigate('Detalhes das Bandas',{"band":band})
        }}
        /> 
      </View>
    )
  }
}