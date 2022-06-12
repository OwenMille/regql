import React, { useState } from "react";
import { Amplify, API } from "aws-amplify";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { Button, Heading, Flex, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { View } from '@aws-amplify/ui-react';
import Board from './Board'
const initialState = { name: '', description: '' }

export const DefaultViewExample = () => {
  return <View as="button">I am a 'View as = button' </View>;
};

const App = () => {
  const [cards, setCards] = useState([])


  async function fetchCards() {
    try {
      const allCards = await API.graphql({ query: queries.listCards });
      const cards = allCards.data.listCards.items
      console.log(cards)
      setCards(cards)

    } catch (err) { console.log('error fetching cards') }
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
  return (
    <div style={styles.container}>
      <Board />
        <Heading level={2} style={styles.head}>Re:ql</Heading>
        
        <Flex direction="column" padding="30px">
          <Divider />
            <Button onClick={() => {fetchCards()}}>
              Fetch
            </Button>          
            <Button onClick={() => {postCard()}}>
              add_card
            </Button>
            in flex
            <DefaultViewExample />

        </Flex>
        not in flex
        <DefaultViewExample />
        not in flex, under default view
       
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}  

export default App