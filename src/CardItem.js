import { React } from "react"
import '@aws-amplify/ui-react/styles.css';

import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
    Divider,
  } from '@aws-amplify/ui-react';
 
 const CardItem = (props) => {
    console.log("Item loaded w/ ID: " + props.id)
    const { tokens } = useTheme();
    return (
      <View
        backgroundColor="black"
        padding={tokens.space.medium}
      >
        <Card>
          <Flex direction="row" alignItems="flex-start">
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={tokens.space.xs}
            >
              <Flex justifyContent="space-between" padding="20px">
                    <Heading level={5}>Title</Heading>
                    <Divider orientation="vertical"/>
                    <Heading level={6}> {props.subtitle} </Heading>                  
              </Flex>
              <Text as="span">
                {props.content}
              </Text>
              { props.rank ? (
              <Button color="white" backgroundColor="black">
                {props.rank}</Button>
                ):(<></>)}
            </Flex>
            
          </Flex>
          
        </Card>
        
      </View>
      
    );
  };


export { CardItem }