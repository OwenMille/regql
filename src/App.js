import React, { useEffect, useState } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { 
  Authenticator, View, Button, Menu, MenuItem, MenuButton, Heading, Flex, Divider, Image, useTheme, Tabs, TabItem, Text
} from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { CardItem } from "./CardItem";
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import New from './New'

Amplify.configure(awsconfig);
Amplify.configure(awsExports);


export default function App() {
  const [cards, setCards] = useState([])
  const [feed, setFeed] = useState(false)
  const [sa, setUserState] = useState([])
  //const ToggleNewCard = () => setNewCard(!newCard)
  
  
  useEffect(() => { 
    cardList()

   }, []);

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
    <Authenticator>
    {({ signOut, user }) => (
      <View maxWidth="600px" margin="auto" >
        <Flex>
          <Text fontSize="32px" fontStyle="italic" fontWeight="200"> Re:ql </Text>
        </Flex>
        <Flex direction="column" alignItems="center">

        <Heading level={3} fontWeight="400">{user.username}</Heading></Flex>
          <Flex direction="column" padding="30px">
            <Tabs>
              <TabItem title="Home">
                </TabItem>
              <TabItem title="New">
                <New username={user.username} />
              </TabItem>
              <TabItem title="Profile">
                <Flex padding="30px">
                    <Button fontStyle="italic" onClick={signOut}>
                      Sign Out
                    </Button> 
                </Flex>
                <Button onClick={()=>{console.log(user.username)}}>
                  delete card
                </Button>
              </TabItem>
            </Tabs>
            <View title="lists">
                    {
                      cards.map((card) => {
                        
                        return (
                          <div className="cardContainer"key={card.id}>
                              <CardItem
                              title={card.title}
                              subtitle={card.subtitle}>
                              </CardItem>
                              <Button size="small" margin="10px" onClick={console.log(card.id)}>Delete Item</Button>
                          </div>     
                          
                           
                          )
                      })
                      
                    }
                      </View>    
            </Flex>
        </View>    
    )}
    </Authenticator>
   );

  async function cardList() {
    try {
      const allCards = await API.graphql({ query: queries.listCards });
      const cards = allCards.data.listCards.items
      
      setCards(cards)
       
    } catch (err) { console.log('error fetching cards') }
  }
}
