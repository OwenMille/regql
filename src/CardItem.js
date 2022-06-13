import { React } from "react"
import { Heading, Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

 const CardItem = (props) => {
    console.log("Item loaded w/ ID: " + props.id)
    return (
        <Card>
        <Heading>{props.title}</Heading>
        <h2>{props.subtitle}</h2>
        </Card>
    )
 }
export { CardItem }