import React from 'react';
import {  TextInput, View, Text, KeyboardAvoidingView } from 'react-native';
import Button from '../../components/common/button' 
import { Formik } from 'formik';

export default function(props) {
    return <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center" }} enabled behavior="padding" >
        <Text style={{ borderRadius: 20, padding: 10, fontSize: 50, fontWeight: "600" }}>Finishing up</Text>
        <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}>We hope you get value out of PatientChat</Text>
        <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}>Would you mind filling in some extra information?</Text>

        <Formik
            initialValues={{ email: '', age: '' }}
            onSubmit={values => {
                props.navigation.navigate('dashboard');
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        placeholder="email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        style={{ height: 40, padding: 10, marginHorizontal: 30, marginVertical: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5 }}
                    />
                    <TextInput
                        placeholder="age"
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        style={{ height: 40, padding: 10, marginHorizontal: 30, marginVertical: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5 }}
                    />
                    <Button onPress={handleSubmit} title="Next" />
                </View>
            )}
        </Formik>
    </KeyboardAvoidingView>
};