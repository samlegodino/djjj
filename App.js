import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColor extends Component {
  displayAlert=()=>{
    alert('PLAYING SOUND TO YOU RIGHT NOW')
  }
  render(){
    return(
      <View style={{marginTop: 20}}>
        <Button color={this.props.color1} title="SOUND 1" onPress={this.displayAlert}/>
        <Text> SOUND 1 PLAY TO HEAR         </Text>
        <Text>     </Text>


        <Button color={this.props.color} title="SOUND 2" onPress={this.displayAlert}/>
        <Text> SOUND 2 PLAY TO HEAR         </Text>
        <Text>     </Text>

        <Button color={this.props.color1} title="SOUND 3" onPress={this.displayAlert}/>
        <Text> SOUND 3 PLAY TO HEAR         </Text>
        <Text>     </Text>

        <Button color={this.props.color} title="SOUND 4" onPress={this.displayAlert}/>
        <Text> SOUND 4 PLAY TO HEAR         </Text>
        <Text>     </Text>

        <Button color={this.props.color1} title="SOUND 5" onPress={this.displayAlert}/>
        <Text> SOUND 5 PLAY TO HEAR         </Text>
        <Text>     </Text>

      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColor color1='red'/>
        
      </View>
    );
  }
}