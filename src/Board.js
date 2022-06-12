import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
//1.
import React from 'react';

//3.
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'


function Board() {
 return(
    <div>
        <AmplifySignOut/> //5.
        <h1>This is your logged in dashboard.</h1>
    </div>
 )
}
export default withAuthenticator(Board)



// export async function t() {

// const cardDetails = {
//     title: 'Todo 1',
//     subtitle: 'Learn AWS AppSync'
//   };
  
// const newTodo = await API.graphql({ query: mutations.createCard, variables: {input: cardDetails}});

// }
