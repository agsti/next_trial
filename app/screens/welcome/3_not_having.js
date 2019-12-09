import React from 'react'
import { Text, View, Picker, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import button from '../../components/common/button';


export default class Onboarding3_2 extends React.Component {

    constructor() {
        super();
        this.state = {
            surgeryKind: [],
            surgeryDate: new Date(),
            newItem: null
        }
    }

    createButton(icon, onPress) {
        return <TouchableOpacity onPress={onPress} style={{ width: 25, height: 25 }}>
            <Icon size={25} name={icon} />
        </TouchableOpacity>
    }



    surgeryRow(itemValue, buttonIcon, pickerChange, buttonPress, itemKey) {
        return <View style={{ flexDirection: "row", alignItems: "center" }} key={itemKey}>
            <Picker
                selectedValue={itemValue}
                style={{ height: 50, width: 200, borderColor: "black", borderWidth: 1 }}
                onValueChange={pickerChange}>
                <Picker.Item label="Hip replacement" value="hip" />
                <Picker.Item label="Knee surgery" value="knee" />
                <Picker.Item label="Other" value="other" />
            </Picker>
            {this.createButton(buttonIcon, buttonPress)}
        </View>
    }



    render() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "bold", justifyContent: "center" }}>First of all, Thanks! we are sure you will be very helpful to the people in the platform</Text>
            <Text style={{ paddingHorizontal: 30, paddingVertical: 30, fontSize: 20, fontWeight: "500", justifyContent: "center" }}>What kind of procedures have you been thorugh?</Text>
            {
                this.state.surgeryKind.map((kind, itemIndex) => {
                    return this.surgeryRow(
                        kind,
                        'diff-removed',
                        (itemValue) => {
                            this.setState(state => {
                                const surgeryKind = state.surgeryKind.map((original, i) => {
                                    if (i == itemIndex) {
                                        return itemValue
                                    } else {
                                        return original
                                    }

                                })
                                return { surgeryKind }
                            })
                        },
                        () => {
                            this.setState(state => {
                                const surgeryKind = state.surgeryKind.filter((_, index) => index != itemIndex)
                                return { surgeryKind };
                            })
                        },
                        `current_surgeries_${itemIndex}`

                    )
                })
            }
            {
                this.surgeryRow(
                    this.state.newItem,
                    'diff-added',
                    (newItem, itemIndex) => {
                        this.setState({ newItem })
                    },
                    () => {
                        this.setState(state => {
                            const { newItem, surgeryKind } = state
                            const new_surgeryKind = [...surgeryKind, newItem]
                            return { surgeryKind: new_surgeryKind }
                        })
                    },
                    'newItem'
                )
            }



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
