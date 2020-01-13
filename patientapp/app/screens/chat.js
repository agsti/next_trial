import React from 'react'

import { Header } from 'react-navigation-stack';
import { KeyboardAvoidingView, StatusBar } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

import MockChatFlow from '../data/sample_chat_flow'


export default class Chat extends React.Component {

    convertQuestion(question){
        console.log(question)
        let base = {
            _id: question.id,
            text: question.question,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
        }
        if (question.type == "CATEGORICAL" && question.answers){
            base.quickReplies = {
                type: 'radio', // or 'checkbox',
                keepIt: true,
                values: []
            };
            for (i = 0; i < question.answers.length; i++){
                const answer = question.answers[i];
                base.quickReplies.values.push({
                    title: answer,
                    value: i
                });
            }
        }
        return base;
    }

    state = {
        messages: [],
        flow_index: 0
    }

    getNewQuestion(){
        const {flow_index} = this.state;
        this.setState({flow_index: flow_index + 1})
        return MockChatFlow.questions[flow_index];
    }

    addMessageToChat(message){
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
        }))
    }


    componentWillMount() {
        const newQuestion = this.getNewQuestion();
        const newMessage = this.convertQuestion(newQuestion);
        this.addMessageToChat(newMessage)
    }

    onSend(messages = []) {
        const newQuestion = this.getNewQuestion();
        const newMessage = this.convertQuestion(newQuestion);
        this.addMessageToChat(newMessage)
    }

    onQuickReply(quickReply){
        console.log(quickReply)
    }


    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1}} enabled behavior="height" keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight}>
                <GiftedChat style={{ flex: 1}}
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    onQuickReply={qr => this.onQuickReply(qr)}
                    user={{
                        _id: 1,
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}