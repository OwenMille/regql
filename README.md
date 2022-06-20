
### NOTE: This is a "personal aws learning" focused readme. 
Since my journey of rediscovering web developement and taking functional routes of learning over classroom-based ones, I have bounced around many different projects. Anything here is not likely to be informational out of whatever context I was in at the time of writing. But it has been a fun journey so I'll update with my takeaways here.

If anyone reading this decides to jump into react development with a full-stack attitude, I also hope to show my thought process and you can take what you can from it.

Links
[Amplify Page](https://us-east-2.console.aws.amazon.com/amplify/home?code=a6684ca5da7d55e32250&region=us-east-2#/d1y9epafimvc2p/YmFja2VuZA/dev?category=api)

[Amplify Studio](https://us-east-2.admin.amplifyapp.com/admin/login?appId=d1y9epafimvc2p&code=27d37dcc-1979-4259-b2a8-c2d953a0162e&sessionId=88436c7d-de29-442e-af2d-26b4a48c28e6&backendEnvironmentName=dev)

[AppSync -dev](https://us-east-2.console.aws.amazon.com/appsync/home?region=us-east-2#/ntpsmpm6ifgnxco6rm7ov2xupq/v1/home)

[User Pools](https://us-east-2.console.aws.amazon.com/cognito/users/?region=us-east-2#/pool/us-east-2_T2IRw6JFN/details?_k=1x4ixk)



## Authenticator Component
user object with keys 
`username, pool, Session, client, signInUserSession, authenticationFlowType, storage, keyPrefix, userDataKey, attributes, preferredMFA`

## Update schema
If you want to update your API, open your project's amplify/backend/api/<api-name>/schema.graphql file (NOT the one in the amplify/backend/api/<api-name>/build folder) and edit it in your favorite code editor. You can compile the amplify/backend/api/<api-name>/schema.graphql file by running:
`amplify api gql-compile`

## Rebuild GraphQL API
When in development, sometimes test data gets in a bad state or you want to make many changes to your schema all at once. In these cases, you may wish to "rebuild" all of the tables backing your schema. To do this, run:

`amplify rebuild api`

This will recreate ALL of the tables backing models in your schema. ALL DATA in ALL TABLES will be deleted.


## Auth
USER POOLS: `https://us-east-2.console.aws.amazon.com/cognito/users/?region=us-east-2#/pool/us-east-2_T2IRw6JFN/details?_k=1x4ixk`
Retrieve current authenticated user
You can call Auth.currentAuthenticatedUser() to get the current authenticated user object.

Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => console.log(err));

This method can be used to check if a user is logged in when the page is loaded. It will throw an error if there is no user logged in. This method should be called after the Auth module is configured or the user is logged in. To ensure that you can listen on the auth events configured or signIn. Learn how to listen on auth events.

Retrieve attributes for current authenticated user

You can also access the user's attributes like their email address, phone number, sub, or any other attributes that are associated with them from the user object returned by Auth.currentAuthenticatedUser.

const { attributes } = await Auth.currentAuthenticatedUser();
copy
Retrieve current session
Auth.currentSession() returns a CognitoUserSession object which contains JWT accessToken, idToken, and refreshToken.

This method will automatically refresh the accessToken and idToken if tokens are expired and a valid refreshToken presented. So you can use this method to refresh the session if needed.