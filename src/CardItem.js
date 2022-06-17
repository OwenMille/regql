import { React } from "react"
import { View, Heading, Text, Card, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

 const CardItem = (props) => {
    console.log("Item loaded w/ ID: " + props.id)

    return (
        <View padding="5% 15%">
        <Card>
        <Text>{props.id}</Text>
        <Heading level={1}>{props.title}</Heading>
        <Heading level={6}>{props.subtitle}</Heading>
        </Card>
        <Divider />
        </View>
    )
 }
export { CardItem }