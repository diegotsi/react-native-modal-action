import React, { Component } from 'react';
import { FlatList, View, Modal, Text, StatusBar, TouchableWithoutFeedback, TouchableOpacity
 } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ActionItem from './ActionItem';


class ModalAction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
        }
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
    }


    render(){
        return (
            <Modal
                animationType="slide"
                visible={this.props.visible}
                transparent={true}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height:'100%',paddingHorizontal:30,backgroundColor:'rgba(0,0,0,0.2)'}} onPress={() => this.props.onPressOutside()}>
                    <TouchableWithoutFeedback>
                        <View style={styles.viewContent}>
                            {this.props.children}
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
                
            </Modal>
        )
    }
}


export default ModalAction;
