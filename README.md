
## Update schema
If you want to update your API, open your project's amplify/backend/api/<api-name>/schema.graphql file (NOT the one in the amplify/backend/api/<api-name>/build folder) and edit it in your favorite code editor. You can compile the amplify/backend/api/<api-name>/schema.graphql file by running:
`amplify api gql-compile`

## Rebuild GraphQL API
When in development, sometimes test data gets in a bad state or you want to make many changes to your schema all at once. In these cases, you may wish to "rebuild" all of the tables backing your schema. To do this, run:

`amplify rebuild api`

This will recreate ALL of the tables backing models in your schema. ALL DATA in ALL TABLES will be deleted.


## Auth

Retrieve current authenticated user
You can call Auth.currentAuthenticatedUser() to get the current authenticated user object.

1
2
3
4
5
6
import { Auth } from 'aws-amplify';

Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => console.log(err));
copy
This method can be used to check if a user is logged in when the page is loaded. It will throw an error if there is no user logged in. This method should be called after the Auth module is configured or the user is logged in. To ensure that you can listen on the auth events configured or signIn. Learn how to listen on auth events.

Retrieve attributes for current authenticated user

You can also access the user's attributes like their email address, phone number, sub, or any other attributes that are associated with them from the user object returned by Auth.currentAuthenticatedUser.

const { attributes } = await Auth.currentAuthenticatedUser();
copy
Retrieve current session
Auth.currentSession() returns a CognitoUserSession object which contains JWT accessToken, idToken, and refreshToken.

This method will automatically refresh the accessToken and idToken if tokens are expired and a valid refreshToken presented. So you can use this method to refresh the session if needed.