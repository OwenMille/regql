import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import React, { useState } from 'react';
import {
    Flex,
    View,
    Button,
    TextField,
    TextAreaField,
    Text
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

export default function New(props) {
    const [info, setInfo] = useState({
        id: "",
        title: "",
        subtitle: "",
        content: "",
        link: "",
        rank: ""
    })
    async function postCard() {
        console.log(info)
    }
    return (
     
        <Flex direction="column">
          <View paddingLeft="10%" paddingRight="10%">
              <TextField
                placeholder="Title of Work"
                fontWeight="300"
              />
              <TextField
                fontWeight="300"
                placeholder="Name of Creator"
                name="subtitle"
                direction="column"
                inputMode="text"
              />
           </View>
         <TextAreaField
            labelHidden={false} 
            name="last_name"
            placeholder="Card Content"
            rows="3"
            size="small"
            
          />
        </Flex>
     
    )
}

