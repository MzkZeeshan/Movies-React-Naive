import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderStyle: 'solid',
          borderBottomColor: '#eaeaea',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <View style={{justifyContent: 'center', paddingHorizontal: 7}}>
          <Text>Find Your Movies</Text>
        </View>
      </View>
    );
  }
}
