import React, { useEffect, useState } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { 
  Authenticator, View, Button, 
  Heading, Flex, Divider, Image, useTheme, Card 
} from '@aws-amplify/ui-react';

import { CardItem } from "./CardItem";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);
Amplify.configure(awsExports);





const components = {
  Header() {
    const { tokens } = useTheme();
    return (
      <Flex direction="row" alignContent="center"alignItems="center">
        <Heading fontSize="90px"padding="100px" fontFamily="serif">ql</Heading>
        <Heading fontSize="24px" fontStyle={"italic"} fontFamily="sans-serif">toplists</Heading>
      </Flex>  
    );
  },
}

const feedStatus = { 
  default: false
}

export default function App () {
  
  const [cards, setCards] = useState([])
  const [feed, setFeed] = useState()

  async function postCard() {
    const cardDetails = {
        id: '12',
        title: 'Todo 1',
        subtitle: 'Learn AWS AppSync'
      };
    console.log(cardDetails)
    const uploadCard = await API.graphql({ query: mutations.createCard, variables: {input: cardDetails}});
    console.log(uploadCard)
  }

  async function deleteCard() {
    const cardDetails = {
      id: '12'
    }
    const delCard = await API.graphql({ query: mutations.deleteCard, variables: {input: cardDetails}});
    console.log("deleteCard")
    console.log(delCard)
    setFeed({loading:true})
  }
  async function cardList() {
    try {
      const allCards = await API.graphql({ query: queries.listCards });
      const cards = allCards.data.listCards.items
      console.log(cards)
      setCards(cards)
       
    } catch (err) { console.log('error fetching cards') }
  }
  return (
    <Authenticator components={components}>
      <div>
          <Heading level={2}>Re:ql</Heading>
          <Flex direction="column" padding="30px">
            <Divider />
              <Button onClick={() => {cardList()}}> fetch cards </Button>          
              <Button onClick={() => {postCard()}}> add card </Button>
              <Button onClick={()=>{deleteCard()}}> delete card </Button>
            <Divider/>
          </Flex>
          <Flex direction="column" padding="30px">
          </Flex>
          {
            cards.map((card) => {
              console.log(card)
              return (
                <div className="cardContainer"key={card.id}>
                    <CardItem
                     title={card.title}
                     subtitle={card.subtitle}
                    >
                    </CardItem>
                </div>             
                )
            })
          }
      </div>
    </Authenticator>
  );
}