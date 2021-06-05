import React, {useState} from 'react'
import { View, Text, TextInput, useColorScheme } from 'react-native'

const PizzaTransaltor = () => {
    const [text, setText] = useState('')
    return (
        <View style = {{padding: 10}}>
            <TextInput
                style = {{height: 40}}
                placeholder = 'Type here to translate!'
                onChangeText = {text => setText(text)}
                defaultValue = {text}
        />
        <Text style = {{padding: 10, fontSize: 42}}>
            {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        </View>
    )
}

export default PizzaTransaltor