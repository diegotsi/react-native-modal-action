import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class ActionItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          selected: false,
        };
        this._onSelect = this._onSelect.bind(this);
    }
    
    _onSelect = () =>  {this.props.callback('2')}
    render(){
        const itemTitleStyles = [styles.itemTitle];
        const itemDescriptionStyles = [styles.itemDescription];
        
        if(this.props.textColor){
            itemTitleStyles.push({color:this.props.textColor});
            itemDescriptionStyles.push({color:this.props.textColor});
        }
        
        return(
            this.props.visibleAction ?
            <TouchableOpacity activeOpacity={0.5} style={styles.row} onPress={() => this._onSelect()}>
                <Icon name={this.props.iconName} size={28} color={this.props.color}/>
                <View style={{marginLeft:15}}>
                    <Text style={itemTitleStyles}>{this.props.title}</Text>
                    <Text style={itemDescriptionStyles}>{this.props.description}</Text>
                </View>
            </TouchableOpacity>
            : null
        )
    }
}


ActionItem.propTypes = {
    iconName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    callback: PropTypes.func
}

export default ActionItem;