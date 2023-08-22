import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}>
      <Name />
      <Text>Tampan</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Name = () => {
  return (
    <View>
      <Text>Zhorief</Text>
      <Text>Zainul</Text>
      <Text>Muttaqin</Text>
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://picsum.photos/200/300'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render(): React.ReactNode {
    return <Text>Ini Componen dari Class</Text>;
  }
}

class Profile extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/301'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{ color: 'blue' }}>Ini pemandangan</Text>
      </View>
    );
  }
}

export default App;
