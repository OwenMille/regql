import { React } from "react"
import { View, Heading, Text, Card, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


// <Flex>
//         <View
//           as="div"
//           ariaLabel="View example"
//           backgroundColor="var(--amplify-colors-white)"
//           borderRadius="6px"
//           border="1px solid var(--amplify-colors-black)"
//           boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
//           color="var(--amplify-colors-blue-60)"
//           height="4rem"
//           maxWidth="100%"
//           padding="1rem"
//           width="20rem"
//           onClick={() => alert('🏔 What a beautiful <View>! 🔭')}
//           >
//           {"I'm a <div>! 🤩"}
//         </View>
//       </Flex>

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