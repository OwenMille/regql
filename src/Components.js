import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import React from 'react';

import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import { View } from '@aws-amplify/ui-react';


export const DefaultViewExample = () => {
    return <View as="button">I am a 'View as = button' </View>;
  };

function Board() {
 return(
    <div>
        <AmplifySignOut/> //5.
        <h1>This is your logged in dashboard.</h1>
    </div>
 )
}
export default withAuthenticator(Board)
