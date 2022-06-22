import React, { useEffect, useState } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { 
  Authenticator, View, Button, Alert, Heading, Flex, Divider, Image, useTheme, Tabs, TabItem, Text
} from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import NewCard from './NewCard'
import { CardItem } from "./CardItem";

Amplify.configure(awsconfig);
Amplify.configure(awsExports);



export default function App() {
  const [cards, setCards] = useState([])
  const [toggleState, setToggleState] = useState(false)

  useEffect(() => { cardList() }, []);

  async function deleteItem(props, user) {
    let cardOwner = props.link
    let currentUser = user.username
    
    if (cardOwner == currentUser) {
console.log("good")
    } else {
      console.log("bad")

    }
  }
  async function deleteCard(id) {
    const cardDetails = {
      id: {id}
    }
    console.log(cardDetails.id)
    const delCard = await API.graphql({ query: mutations.deleteCard, variables: {input: cardDetails.id}});
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
                <NewCard username={user.username} />
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
                              { card.link==user.username ?(
                                <Button variation="link" padding="3px"
                                onClick={()=>{setToggleState(true)}}>x</Button>
                                ):(<></>)}  { toggleState ? (
                                  <Button size="small" 
                                          margin="10px" 
                                          onClick={()=>{
                                            deleteItem(card, user)
                                          }}
                                 >Are you sure you want to delete this card?</Button>):(<></>)}

                          
                              <CardItem
                              title={card.title}
                              subtitle={card.subtitle}
                              content={card.content}
                              link={card.link}
                              rank={card.rank}
                              />

                              { card.link==user.username ?(
                                <Button variation="link" color="white" padding="3px"
                                onClick={()=>{setToggleState(true)}}>x</Button>
                              ):(<></>)}
                           
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
