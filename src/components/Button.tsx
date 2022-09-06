import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    title: string
}


export function Button({title, ...rest } : ButtonProps){ // Para dizer q por fo " : " tipo Button e do tipo ButtonProps
    return(
        
       <TouchableOpacity 
            style={estilo.button}
            activeOpacity={.5}           
            {...rest} // todas a propriedades q vinher
       >

            <Text style={estilo.buttonText}>
                {title}
            </Text>
        </TouchableOpacity> 
    )
}

const estilo = StyleSheet.create({
    button:{
        backgroundColor:'#A020F0',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'

    },
})