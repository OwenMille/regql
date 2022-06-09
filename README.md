
## Update schema
If you want to update your API, open your project's amplify/backend/api/<api-name>/schema.graphql file (NOT the one in the amplify/backend/api/<api-name>/build folder) and edit it in your favorite code editor. You can compile the amplify/backend/api/<api-name>/schema.graphql file by running:
`amplify api gql-compile`

## Rebuild GraphQL API
When in development, sometimes test data gets in a bad state or you want to make many changes to your schema all at once. In these cases, you may wish to "rebuild" all of the tables backing your schema. To do this, run:

`amplify rebuild api`

This will recreate ALL of the tables backing models in your schema. ALL DATA in ALL TABLES will be deleted.