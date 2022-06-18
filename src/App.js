import React, { useEffect, useState } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { 
  Authenticator, View, Button, 
  Heading, Flex, Divider, Image, useTheme, Tabs, TabItem
} from '@aws-amplify/ui-react';

import { Dropdown } from "./Components";
import { CardItem } from "./CardItem";
//import CreateCard from "./CreateCard";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { ButList } from "./Components";
import New from './New'
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

export default function App () {

  const [cards, setCards] = useState([])
  const [feed, setFeed] = useState(false)
  const [newCard, setNewCard] = useState(false)
  //const ToggleNewCard = () => setNewCard(!newCard)
  useEffect(() => { cardList() }, []);


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
  }

  return (
    <Authenticator components={components}>
      <div>
          <Heading level={2}>Re:ql</Heading>

          

          <Flex direction="column" padding="30px">
            <Divider />
            <Tabs>
              <TabItem title="Tab 1">
              <New 

/>
              </TabItem>
              <TabItem title="Tab 2">
                <Dropdown />
              </TabItem>
            </Tabs>
            <Divider size="large"/>              
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

  async function cardList() {
    try {
      const allCards = await API.graphql({ query: queries.listCards });
      const cards = allCards.data.listCards.items
      console.log(cards)
      setCards(cards)
       
    } catch (err) { console.log('error fetching cards') }
  }
}