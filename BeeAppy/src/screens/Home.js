import React from 'react';
import BeeButton from '../components/buttons/BeeButton';
import BeeFactButton from '../components/buttons/BeeFactButton';
import Donate from './Donate';
import style from '../styles/style';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={style.viewStyle}>
        <BeeButton />
          <TouchableHighlight
            onPress={() => navigate('Donate')}
            style={style.donateButton}>
            <Image
              style={style.imageButtonStyle}
              source={require('../img/honey.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate('BeeHive')}
            style={style.beehiveButton}>
            <Image
              style={style.imageButtonStyle}
              source={require('../img/earth-globe.png')}
            />
          </TouchableHighlight>
          <View style={style.beeFactButton}>
            <BeeFactButton/>
          </View>
      </View>
    );
  }
}
