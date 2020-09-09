import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';
import { DrawerActions } from "react-navigation-drawer";


export default class AppHeader extends Component{
  constructor(props){
    super(props)
   
  }



  

  render(){
    return(
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }/>}
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          
          backgroundColor = "#eaf8fe"
        />

)
}

}