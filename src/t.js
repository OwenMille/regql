import { API } from "aws-amplify"
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';


export async function t() {

const cardDetails = {
    title: 'Todo 1',
    subtitle: 'Learn AWS AppSync'
  };
  
const newTodo = await API.graphql({ query: mutations.createCard, variables: {input: cardDetails}});

}