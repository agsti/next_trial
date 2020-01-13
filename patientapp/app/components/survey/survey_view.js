import React, { useState } from 'react'

import { Header } from 'react-navigation-stack';
import { Animated, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar } from 'react-native'

import SurveyButton from './survey_button'
import SurveySlider from './survey_slider'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },

})



function renderCategorical(question, onAnswer) {
    return <View>
        {
            question.answers.map(answer => {
                return <SurveyButton title={answer} onPress={() => onAnswer(question, answer)} key={answer} style={{ margin: 5 }} />
            })
        }
    </View>
}

function renderCategoricalRange(question, onAnswer) {
    const [slider_value, setSliderValue] = useState(0);
    const { values } = question;
    return <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SurveySlider
            onValueChange={value => setSliderValue(value)}
            min_value={0}
            max_value={values.length - 1}
            value={slider_value}
            definition={values[slider_value]}
        />
        <SurveyButton title={"Next"} onPress={() => onAnswer(question, slider_value)} style={{ margin: 5 }} />
    </View>
}

function renderNumericalRange(question, onAnswer) {
    const [slider_value, setSliderValue] = useState(0);
    const { min_value, max_value } = question;
    return <View style={{ flexDirection: "row", alignItems: "center" }}>
        <SurveySlider
            onValueChange={value => setSliderValue(value)}
            min_value={min_value}
            max_value={max_value}
            value={slider_value}
        />
        <SurveyButton title={"Next"} onPress={() => onAnswer(question, slider_value)} style={{ margin: 5 }} />
    </View>
}

function renderFreeForm(question, onAnswer) {
    const [inputValue, textChange] = useState("");
    return <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
            style={{ width: 250, height: 40, borderColor: '#DFDFDF', borderWidth: 1 }}
            onChangeText={value => textChange(value)}
            value={inputValue}
        />
        <SurveyButton title={"FF Next"} onPress={() => onAnswer(question, inputValue)} style={{ margin: 5 }} />
    </View>
}

function renderOpenAnswers(question, onAnswer) {
    return <SurveyButton title="Record answer" onPress={() => onAnswer(question, null)} />
}

function renderMSGAnswers(question, onAnswer) {
    return <SurveyButton title="Next" onPress={() => onAnswer(question, null)} />
}

function renderAnswer(question, onAnswer) {

    if (question.type == "CATEGORICAL") {
        return renderCategorical(question, onAnswer);
    } else if (question.type == "CATEGORICAL_RANGE") {
        return renderCategoricalRange(question, onAnswer)
    } else if (question.type == "OPEN") {
        return renderOpenAnswers(question, onAnswer)
    } else if (question.type == "MSG") {
        return renderMSGAnswers(question, onAnswer)
    } else if (question.type == "FREEFORM") {
        return renderFreeForm(question, onAnswer)
    } else {
        console.warn("Unrecognized quesiton type", question.type)
    }
}

export default function (props) {
    const { question } = props
    return <Animated.View style={{ flex: 1, ...props.style }}>
        <KeyboardAvoidingView style={{ height: "100%" }} behavior="height" keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight} >
            <View style={{ margin: 35, flex: 1, justifyContent: "space-between", flexDirection: "column" }}>
                <Text style={styles.textStyle}>{question.question}</Text>
                <View style={{ alignSelf: "flex-end", margin: 10 }}>
                    {renderAnswer(question, props.onAnswer)}
                </View>
            </View>
        </KeyboardAvoidingView>
    </Animated.View>
}