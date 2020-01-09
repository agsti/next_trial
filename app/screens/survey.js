import React from 'react';
import { Dimensions, Animated, View, BackHandler } from 'react-native'
import SurveyView from '../components/survey/survey_view'
import SurveyButton from '../components/survey/survey_button'


import MockData from '../data/sample_chat_flow'

const windowHeight = Dimensions.get('window').height;

function createFlowMap(flow) {
    let m = new Map()
    for (let question of flow) {
        m.set(question.id, question);
    }
    return m;
}



export default class SurveyScreen extends React.Component {


    state = {
        flow: createFlowMap(MockData.questions),
        mainQuestion: 123,
        helperQuestion: 124,
        viewOpacity: 0,
        mainTranslateY: new Animated.Value(windowHeight),
        helperTranslateY: new Animated.Value(windowHeight),
        mainOpacity: new Animated.Value(0.0),
        helperOpacity: new Animated.Value(0.0),
        backstack: [],
        animating: false
    }

    componentDidMount() {
        this.slideIn();
        BackHandler.addEventListener("hardwareBackPress", () => {
            if (this.state.backstack.length != 0 && !this.state.animating) {
                this.previousQuestion();
                return true;
            }
            if (this.state.animating){
                this.state.mainTranslateY.stopAnimation()
                this.state.helperTranslateY.stopAnimation()
                this.state.mainOpacity.stopAnimation()
                this.state.helperOpacity.stopAnimation()
                return true;
            }
            return false;

        });
    }

    onAnswer(question, answer) {
        if (question.next && question.next != "NONE") {
            if (this.state.animating){
                this.state.mainTranslateY.stopAnimation()
                this.state.helperTranslateY.stopAnimation()
            }
            this.nextQuestion();
        }
    }

    slideIn() {
        this.state.mainTranslateY.setValue(windowHeight)

        Animated.parallel([
            Animated.timing(this.state.mainTranslateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.mainOpacity, {
                toValue: 1.0,
                duration: 2000,
                useNativeDriver: true
            })]).start();
        
        
    }

    nextQuestion() {
        this.setState(({ mainQuestion, flow, backstack }) => {
            backstack.push(mainQuestion)
            return { helperQuestion: flow.get(mainQuestion).next, animating: true }
        })
        this.state.helperTranslateY.setValue(windowHeight)
        this.state.helperOpacity.setValue(0)

        Animated.parallel([
            Animated.timing(this.state.mainTranslateY, {
                toValue: -windowHeight,
                duration: 700,
                useNativeDriver: true
            }),
            Animated.timing(this.state.helperTranslateY, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true
            }),   
            Animated.timing(this.state.mainOpacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.helperOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        
        
        ]).start(() => this.swapQuestions());
    }

    previousQuestion() {

        this.setState(({ backstack }) => {
            const backStackItem = backstack.pop();
            return { helperQuestion: backStackItem, animating: true }
        })
        this.state.helperTranslateY.setValue(-windowHeight)
        this.state.helperOpacity.setValue(0)

        Animated.parallel([
            Animated.timing(this.state.mainTranslateY, {
                toValue: windowHeight,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.helperTranslateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.mainOpacity, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true
            }),
            Animated.timing(this.state.helperOpacity, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true
            }),
        
        ]).start(() => this.swapQuestions());
    }

    swapQuestions() {

        this.state.mainTranslateY.setValue(0)
        this.state.mainTranslateY.setValue(0)
        this.state.mainOpacity.setValue(1)
        this.setState(({ helperQuestion }) => {
            return {
                mainQuestion: helperQuestion,
                animating: false
            }
        })
    }

    render() {
        const { flow, mainQuestion, helperQuestion } = this.state;
        return <View style={{ flex: 1 }}>
            <SurveyView
                style={{ position: "absolute", height: "100%", width: "100%", translateY: this.state.mainTranslateY, opacity:this.state.mainOpacity }}
                question={flow.get(mainQuestion)}
                onAnswer={(q, a) => this.onAnswer(q, a)}

            />
            <SurveyView
                style={{ position: "absolute", height: "100%", width: "100%", translateY: this.state.helperTranslateY, opacity:this.state.helperOpacity  }}
                question={flow.get(helperQuestion)}
                onAnswer={(q, a) => this.onAnswer(q, a)}

            />
        </View>
    }
}