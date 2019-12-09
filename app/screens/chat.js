import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends React.Component {
    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: "Hi! I'm Mark, I'm having a hip replacement surgery in a month. Would you mind if we have a chat?",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Mark',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center" }} enabled behavior="height">
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}