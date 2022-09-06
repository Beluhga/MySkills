import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps,
    Text

} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skill: string
}

export function Skillcard({skill, ...rest } : SkillCardProps){ // colocando a skill aqui para tanarsferir para o Home
        return(

    <TouchableOpacity 
        style={estilo.buttonSkill}
        {...rest}
        >
            <Text style={estilo.textSkill}>
                {skill}
            </Text>
    </TouchableOpacity>

)


}

const estilo= StyleSheet.create({
    buttonSkill:{
        backgroundColor: '#1C1C1C',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10

    },
    textSkill: {
        color:  '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

})