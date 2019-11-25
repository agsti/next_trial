import React from 'react';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import InteractionMenu from './app/components/interaction_menu'
import InteractionFlow from './app/components/interaction_flow'

import sample_data from './app/sample_data';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    chosen_interaction: null
  };

  styleSheet  = {
    overlayContainer :{
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: "flex-end",
      backgroundColor: 'transparent'
    }

  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  choose_flow(i) {
    console.log(`Choosing ${sample_data[i].title}`)
    this.setState({chosen_interaction: sample_data[i].questions})
  }


  render() {
    const { hasCameraPermission, chosen_interaction } = this.state;

    let overlay;
    if (chosen_interaction) {
      overlay = <InteractionFlow flow={chosen_interaction} onFlowFinished={()=>this.setState({chosen_interaction: null})}/>
    } else {
      overlay = <InteractionMenu flows={sample_data} onItemSelected={this.choose_flow.bind(this)} />
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
              style={this.styleSheet.overlayContainer}>
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
