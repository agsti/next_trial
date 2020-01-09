import React, { useState } from 'react'

import { Animated, View, Text, StyleSheet } from 'react-native'

import SurveyButton from './survey_button'
import SurveySlider from './survey_slider'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },

})



function renderCategoricalAnswers(question, onAnswer) {
    return <View>
        {
            question.answers.map(answer => {
                return <SurveyButton title={answer} onPress={() => onAnswer(question, answer)} key={answer} style={{ margin: 5 }} />
            })
        }
    </View>
}

function renderNumericAnswers(question, onAnswer) {
    const [slider_value, setSliderValue] = useState(0);
    const { values } = question;
    return <Animated.View style={{ flexDirection: "row", alignItems:"center" }}>
        <SurveySlider 
        onValueChange={value => setSliderValue(value)} 
        max_value={values.length - 1 }
        min_value={0}
        value={slider_value}
        definition={values[slider_value]}
        />
        <SurveyButton title={"Next"} onPress={() => onAnswer(question, slider_value)} style={{ margin: 5 }} />
    </Animated.View>
}

function renderOpenAnswers(question, onAnswer) {
    return <SurveyButton title="Record answer" onPress={() => onAnswer(question, null)} />
}

function renderMSGAnswers(question, onAnswer) {
    return <SurveyButton title="Next" onPress={() => onAnswer(question, null)} />
}

function renderAnswer(question, onAnswer) {

    if (question.type == "CATEGORICAL") {
        return renderCategoricalAnswers(question, onAnswer);
    } else if (question.type == "CATEGORICAL_RANGE") {
        return renderNumericAnswers(question, onAnswer)
    } else if (question.type == "OPEN") {
        return renderOpenAnswers(question, onAnswer)
    } else if (question.type == "MSG") {
        return renderMSGAnswers(question, onAnswer)
    } else {
        console.warn("Unrecognized quesiton type", question.type)
    }
}

export default function (props) {
    const { question } = props
    return <Animated.View style={{ flex: 1, ...props.style }}>
        <View style={{ margin: 35, flex: 1, justifyContent: "space-between", flexDirection: "column" }}>
            <Text style={styles.textStyle}>{question.question}</Text>
            <View style={{ alignSelf: "flex-end", margin: 10 }}>
                {renderAnswer(question, props.onAnswer)}
            </View>
        </View>
    </Animated.View>
}