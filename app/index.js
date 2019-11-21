import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Data from './sample_data'

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    chosen_interaction: null,
    interaction_index: 0
  };

  styleSheet  = {
    button: {
      flex: 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

    buttonText: {
      fontSize: 26, 
      color: 'white'
    }

  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  choose_flow(i){
    console.log(`Choosing ${Data[i]}`)
    this.setState({chosen_interaction: Data[i]})
  }

  choose_interaction_menu(){
    return [<TouchableOpacity
    style={this.styleSheet.button}
    key="1"
    onPress={() => {this.choose_flow(0)}}>
    <Text style={this.styleSheet.buttonText}> Day 2 5 </Text>
  </TouchableOpacity>,
  <TouchableOpacity
    style={this.styleSheet.button}
    key="2"
    onPress={() => {this.choose_flow(1)}}>
    <Text style={this.styleSheet.buttonText}> Day 10 13 </Text>
  </TouchableOpacity>,
  <TouchableOpacity
    style={this.styleSheet.button}
    key="3"
    onPress={() => {this.choose_flow(2)}}>
    <Text style={this.styleSheet.buttonText}> Day 20 27 34 41 </Text>
  </TouchableOpacity>]
  }


  interaction_flow() {
    const {chosen_interaction, interaction_index} = this.state;
    const interaction_text = chosen_interaction[interaction_index];
    return <TouchableOpacity
    style={this.styleSheet.button}
    onPress={() => {
      const {chosen_interaction, interaction_index} = this.state;
      if (interaction_index+1 < chosen_interaction.length){
        this.setState({interaction_index: interaction_index+1});
      } else {
        this.setState({chosen_interaction: null})
      }
    }}>
      <Text style={this.styleSheet.buttonText}> {interaction_text}</Text>
    </TouchableOpacity>;
  }


  render() {
    const { hasCameraPermission, chosen_interaction } = this.state;

    let overlay;
    if (chosen_interaction) {
      overlay = this.interaction_flow();
    } else {
      overlay = this.choose_interaction_menu();
    }



    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'gray',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: "center"
              }}>
                {
                  overlay
                }
            </View>
          </Camera>
        </View>
      );
    }
  }
}
