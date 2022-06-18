// NOT IMPORTED IN APP

import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import React from 'react';

import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import { Button, View } from '@aws-amplify/ui-react';

import { SelectField, Flex } from '@aws-amplify/ui-react';

async function cardList() {
  try {
    const cards = await API.graphql({ query: queries.listCards });
    
    console.log(cards)
    
     
  } catch (err) { console.log('error comp') }
}
export const ButList = () => (
  <Flex padding="30px">
    <code>butlist</code>
    <Button onClick={() => {cardList()}}></Button>
  </Flex>
)





// export const CreateCard = () => (
  
// )


export const Dropdown = () => (
  <Flex direction="column">
    <SelectField
      label="Animals"
      options={['lions', 'tigers', 'bears']}
    ></SelectField>

    <SelectField label="This is the same as the example above">
      <option value="lions" label="lions">
        lions
      </option>
      <option value="tigers" label="tigers">
        tigers
      </option>
      <option value="bears" label="bears">
        bears
      </option>
    </SelectField>
  </Flex>
);



// export const DefaultViewExample = () => {
//     return <View as="button">I am a 'View as = button' </View>;
//   };

// function Board() {
//  return(
//     <div>
//         <AmplifySignOut/> //5.
//         <h1>This is your logged in dashboard.</h1>
//     </div>
//  )
// }
// export default withAuthenticator(Board)
