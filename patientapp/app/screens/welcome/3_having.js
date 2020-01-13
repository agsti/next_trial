import React from 'react'
import { Text, View, Picker } from 'react-native'
import DatePicker from 'react-native-datepicker'
import Button from '../../components/common/button'

export default class Onboarding3_1 extends React.Component {

    constructor() {
        super();
        this.state = {
            surgerykind: "",
            surgeryDate: new Date()
        }
    }

    render() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}>What kind of surgery are you going through?</Text>
            <Picker
                selectedValue={this.state.surgeryKind}
                style={{ height: 50, width: 200, borderColor: "black", borderWidth: 1 }}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ surgeryKind: itemValue })
                }>
                <Picker.Item label="Hip replacement" value="hip" />
                <Picker.Item label="Knee surgery" value="knee" />
                <Picker.Item label="Other" value="other" />
            </Picker>

            <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}> When?</Text>
            <DatePicker
                style={{ width: 200 }}
                date={this.state.surgeryDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={(date) => { this.setState({ surgeryDate: date }) }}
            />
            <Button
                style={{
                    marginVertical: 30,
                    marginHorizontal: 10,
                    padding: 30,
                    backgroundColor: "#FAFAFA",
                    borderColor: "#AFAFAF",
                    borderWidth: 1,
                    borderRadius: 100
                }}
                title="Next"
                onPress={() => this.props.navigation.navigate("onboarding4")} />
        </View>
    }
}
