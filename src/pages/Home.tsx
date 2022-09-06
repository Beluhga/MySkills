import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, 
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { Skillcard } from '../components/Skillcard';

interface SkillData{
    id: string;
    name: string;
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]); // além de reculpera o esdado, muda o estado
    const [gretting, setGretting] = useState('');

    // oldState => [React Native, TypesScript]
    // [React Native, TypeScript, Javascript]
    function handleNewAddSkill(){

        const data = {
            id: String(new Date().getTime()), 
            name: newSkill
        }


        setMySkills(oldState => [...oldState, data]); // colocar o "..." assim ele pega tudo do useState([])

    }

    function handleRemoveSkill(id: string){ // a funcao para remover as skills
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))

    }

    useEffect(() => { // Usado para q quando o usuario entrar ele saber se é bom dia, boa tarde e boa noite
        const currentHour = new Date().getHours();
        if(currentHour < 12){
            setGretting('Good morning');
        }
        else if(currentHour >= 12 && currentHour < 18){
        setGretting('Good afternoon');
            
        }else {
            setGretting('Good Evening');
        }
    }, []) 

    /*function handleInputChange(text) usar para testa em onChangeText
        console.log(text)
    }*/

  return(

    <View style={estilo.container}>
        
        <Text style={estilo.title}>
            Welcome, Michael
        </Text>

        <Text style={estilo.greetings}>
            {gretting}
       </Text>

      <TextInput
            style={estilo.input}
            placeholderTextColor= "#555"
            placeholder='New Skill' // reculpera o valor digitado pelo "TextInput"
            onChangeText={setNewSkill} // Para mudar o estado do newSkill do useState
       />

        <Button 
            title= "Add"
            onPress={handleNewAddSkill}
        />

        <Text style={[estilo.title, {marginVertical: 20}]}>
           My Skills
        </Text>

        <FlatList
            data={mySkills} // para passar a coleção de dados
            keyExtractor={item => item.id} //reculpara cada item
            renderItem={({item}) => ( // desistruturou com o {({ item })} o valor dele vai dentro do skill
                <Skillcard 
                    skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)} // aqui e para remover as skills antigas ao clicar
                    />

            )}
        />
        
    </View>
  )    
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 70,

    },
    title:{
        color: '#fff',
        fontSize: 30,
    },

    input:{
        backgroundColor: '#363636',
        fontSize: 18,
        marginTop: 30,
        borderRadius: 20,
        color: '#A9A9A9',
        padding: Platform.OS == 'ios' ? 15 : 10,
    },

    greetings:{
        color: '#fff'
    }

    
    


})