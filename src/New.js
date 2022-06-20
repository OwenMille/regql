import { API } from "aws-amplify"
import { createCard } from './graphql/mutations';
import { useState } from 'react';
import {
    Flex,
    View,
    Button,
    TextField,
    TextAreaField,
    Text
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';


const formState = { 
  id: "",
  title: "",
  subtitle: "",
  content: "",
  link: "",
  rank: ""
}

function updateFormState(key, value) {
  formState[key] = value
}


export default function New(props) {
  
    
    function postCard() {
     
        console.log(formState)
    }
    return (
      <Flex direction="column" maxWidth="500px">
        <View padding="30px">
          <TextField
            placeholder="Title of Post"
            fontWeight="300"
            onChange={e => updateFormState('title', e.target.value)}
          />
          <TextField
            fontWeight="300"
            placeholder="Post Subtitle (the author, your reaction, etc.)"
            name="subtitle"
            direction="column"
            inputMode="text"
          />
          <TextAreaField
            labelHidden={false} 
            name="last_name"
            rows="3"
            size="small"
            onChange={e => updateFormState('content', e.target.value)}
          />
          <Flex direction="row">
            <TextField placeholder="id" />
            <TextField placeholder="Your Ranking" />
            </Flex>
          <Flex padding ="15px">
          
          
          <button onClick={console.log(formState)}>Create New Contact</button>
          <Button onClick={() => {postCard()}}> add card </Button>
          </Flex>        </View>
      </Flex>
      
    
    )
}

