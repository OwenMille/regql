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
      <View paddingLeft="10%" paddingRight="10%">
        <Flex direction="column">
          <TextField
            placeholder="Title"
            size="large"
          />
          <Flex direction="row">
            <TextField
              descriptiveText="Optional"
              placeholder="Name of author, artist, etc."
              name="subtitle"
              direction="column"
              size="small"
              inputMode="text"
            />
            <TextField
              descriptiveText="Optional"
              placeholder="Name of author, artist, etc."
              name="subtitle"
              direction="column"
              size="small"
              inputMode="text"
            />
          </Flex>
         <TextAreaField
  descriptiveText="Contents"
  labelHidden={false} 
  name="last_name"
  placeholder="Baggins"
  rows="2"
  size="small"
  wrap="nowrap"
 />
        </Flex>
      </View>      
    )
}

