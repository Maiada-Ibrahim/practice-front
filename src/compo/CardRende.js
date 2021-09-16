import React from 'react'
import { Card, Button } from 'react-bootstrap'


export class CardRende extends React.Component {

// adduserdatapass=()=>{
    
// }
    render() {
        return (
            <>
            {
                this.props.alldata.map((element, index)=> {
                    let inf=element
                    return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.thumb} />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>
                               {element.alt_description}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{this.props.adduserdata(inf)}}>add to my fav</Button>
                        </Card.Body>
                    </Card>)
                } )
            }
            </>
        )
    }
}

export default CardRende