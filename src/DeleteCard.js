import { API } from "react"
import { Button } from "@aws-amplify/ui-react"






<Alert variation="success" isDismissible={true} hasIcon={true}>
Post Deleted.
</Alert> 





export default function DeleteCard(props, user) {
    let cardOwner = props.link
    console.log(cardOwner)
    console.log()
//     const deleteItem = (props, user) => {
//         let cardOwner = props.link
//         let currentUser = user.username
//         if (cardOwner == currentUser) {
//             console.log("owner")
//         } else {
//           console.log("cant delete this")
//         }
//       }
//       async function deleteCard(id) {
//         const cardDetails = {
//           id: {id}
//         }
//         console.log(cardDetails.id)
//         const delCard = await API.graphql({ query: mutations.deleteCard, variables: {input: cardDetails.id}});
//         console.log(delCard)
//       }
//     return (
//         <Button size="small" margin="10px" 
//         onClick={()=>{
//           deleteItem(card, user)
//         }}
//         >Delete Item</Button>
//     )
}

