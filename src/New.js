import { React } from "react"
import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
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


export default function New(username) {
  async function confirm() {
    let intRank=parseInt(formState.rank);
    updateFormState('rank', intRank)
    updateFormState('id', Date.now())
    updateFormState('link', username.username )
    postCard()
  }
  
  async function postCard() {

   
    // const uploadCard = await API.graphql({ query: mutations.createCard, variables: {input: formState}});
    // console.log(uploadCard)
    // window.location.reload(false);

    console.log("API -> ", formState)

  }
  return (
      <Flex direction="column" maxWidth="500px">
        <View padding="30px"/>
          <TextField
            variation='primary'
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
            onChange={e => updateFormState('subtitle', e.target.value)}
          />
          <TextAreaField
            labelHidden={false} 
            name="content"
            rows="3"
            placeholder="Content"
            size="small"
            onChange={e => updateFormState('content', e.target.value)}
          />
          <TextField
            size="small"
            fontWeight="800"
            placeholder="Give the item a score, 1-10 (optional)"
            onChange={e => updateFormState('rank', e.target.value)}
          />
          <Flex margin="auto" padding ="15px">

          <Button  
              variation="primary"
              onClick={() => {confirm()}}> Create Post
          </Button> 
          </Flex>       
        
      </Flex>
      
    
    )
}

// async function p() => {
//   const uploadCard = await API.graphql({ query: mutations.createCard, variables: {input: formState}});
// }