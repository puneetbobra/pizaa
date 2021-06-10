import React, {useState} from 'react'
import { View, Text, TextInput, Button  } from 'react-native'

const PizzaTransaltor = () => {
    const [text, setText] = useState('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState(Number(num1) * Number(num2))
    function calculateTotal(){
       return setTotal( Number(num1) * Number(num2) )
    }
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
        
        <Text style = {{padding: 20, fontSize: 44, color: 'red'}}>
            Total number of words are: {text.split(' ').length}            
            </Text>

        <TextInput
            style = {{height: 50, width: 30, borderColor : 'blue', border : 'solid'}}
            placeholder = 'Enter 1st Number'            
            onChangeText = {num1 => setNum1(num1)}
            defaultValue = {0} />
        <TextInput
            style = {{height: 50, width: 30, borderColor : 'blue', border : 'solid'}}
            placeholder = 'Enter 2nd Number'
            onChangeText = {num2 => setNum2(num2)}
            defaultValue = {0} 
            />
        <Text style = {{padding: 20, fontSize: 44, color: 'blue'}}>
            First number is {num1} {'\n'}
            Second number is {num2} {'\n'}                        
        </Text>
        <Button style = {{height: 100, width : 20, borderColor: 'green'}}
                title = 'Add them'
                onPress = {calculateTotal}/>
        
        <Text>Total is {total}</Text>

         
            
        </View>
    )
}

export default PizzaTransaltor