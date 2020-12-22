import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import {facebookLogin} from "../actions/index";
import {withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';
import  {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp, 
  } from 'react-native-responsive-screen';
//import subscribeToPushNotifications from "../services/notifications"

class IndexScreen extends Component {
    componentDidMount(){
        //subscribeToPushNotifications();
        /* AsyncStorage.getItem("fbToken").then( token => {
            if(token) {
                this.props.setToken(token);
                this.goToSearch()
            }else{
                this.props.facebookLogin(this.goToSearch)
                
            }
        }) */
        //pas de token
        //connexion facebook
        //si réussi => search
        //sinon si token aller vers search
    }
    goToSearch= () => {
        this.props.navigation.push("Search")
    }
    render() {
        return (
            <View>
                <Text style={{marginTop:hp("5%"), marginHorizontal:wp("5%")}}>
                    En théorie, c'est une auth avec facebook.
                    Mais comme ca marche pas pour le moment, c'est juste un bouton d'accès, et lui il fonctionne !</Text>
                <Button style={{marginTop:hp("30%"), marginHorizontal:wp("5%")}} title="Entrer" onPress={this.goToSearch}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = {
    //facebookLogin
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(IndexScreen));