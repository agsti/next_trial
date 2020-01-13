import React, { Component } from 'react';
import Voice from 'react-native-voice';
import { Text } from 'react-native'
import * as Permissions from 'expo-permissions';

export default class VoiceTest extends Component {
    constructor() {
        super()
        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);

        this.state ={
            recording: false, 
            partialResults: "",
            results: ""
        }
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    async componentDidMount() {
        const { status, expires, permissions } = await Permissions.askAsync(
            Permissions.AUDIO_RECORDING
        );
        if (status !== "granted") {
            //Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
            this.setState({showRecordButton: false});
        } else {
            this.setState({showRecordButton: true});
            Voice.start('en-US');
        }
    }

    onSpeechStartHandler() {
        this.setState({
            recording: true
        })
    }

    onSpeechPartialResults(results) {
        this.setState({
            partialResults: results
        })

    }

    onSpeechResultsHandler(results) {
        this.setState({
            results: results
        })

    }

    onSpeechEndHandler() {
        this.setState({
            recording: false
        })

    }

    render() {
        const {partialResults, results} = this.state;
        return <Text>{partialResults + "---" + results}</Text>
    }
}