import { Amplify, API } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';

import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

import { Button, Heading, Flex, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsconfig);
Amplify.configure(awsExports);



function App() {
   return (
    <div style={styles.container}>
        <Heading level={2} style={styles.head}>Re:ql</Heading>
        <Flex direction="column" padding="30px">
          <Divider />
            <Button onClick={() => {LogAllCards()}}>
              LIST ALL
            </Button>          
            <Button onClick={() => {postCard()}}>
              add_card
            </Button>
        </Flex>
       
    </div>
  );
}
async function LogAllCards() {
  const allCards = await API.graphql({ query: queries.listCards });
  console.log("1. allCards =")
  console.log(allCards)
  console.log("2. allCards.data.listCards.items =")
  console.log(allCards.data.listCards.items)
}
async function postCard() {

  const cardDetails = {
      id: '123',
      title: 'Todo 1',
      subtitle: 'Learn AWS AppSync'
    };
    
  const uploadCard = await API.graphql({ query: mutations.createCard, variables: {input: cardDetails}});
  console.log("cardDetails -> uploadCard =")
  console.log(uploadCard)
  }

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}  
export default App;
