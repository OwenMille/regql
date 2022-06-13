import React, { useState } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { 
  Authenticator, View, Button, 
  Heading, Flex, Divider, Image, useTheme, Card 
} from '@aws-amplify/ui-react';

import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';

Amplify.configure(awsconfig);
Amplify.configure(awsExports);





const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <Flex direction="row" padding="10px"alignItems="center">
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          maxHeight="180px"
          alt="avantgarderu"
          src="https://static01.nyt.com/images/2018/04/07/arts/07avantgard2/merlin_136435113_9f4e2429-bfda-4941-b123-93b3d49dfd6f-articleLarge.jpg?quality=75&auto=webp"
        />
      </View>
      <Flex direction="column" alignContent="center" >
        <Heading fontSize="90px" color="#941100"fontFamily="serif">ql</Heading>
        <Heading fontSize="24px" fontFamily="serif">top lists</Heading>
      </Flex>
      </Flex>
    );
  }
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
      id: '1b8c2efe-eca7-4cb8-9f7f-82707da8c5ff'
    }
    const delCard = await API.graphql({ query: mutations.deleteCard, variables: {input: cardDetails}});
    console.log("deleteCard")
    console.log(delCard)
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
      <div style={styles.container}>
          <Heading level={2} style={styles.head}>Re:ql</Heading>
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

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}  

