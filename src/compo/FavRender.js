import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'


export class FavRender extends Component {
    
    render() {
        return (
            <div>
            {   
                       this.props.data.map((element, index)=> {
                           let inf=element
                           return(
                           <Card style={{ width: '18rem' }}>
                               <Card.Img variant="top" src={element.thumb} />
                               <Card.Body>
                                   <Card.Title>{element.title}</Card.Title>
                                   <Card.Text>
                                      {element.alt_description}
                                   </Card.Text>
                                   <Button variant="primary" onClick={()=>{this.props.delete(inf._id)}}>delete</Button>
                                   <Button variant="primary" onClick={()=>{this.props.update(inf)}}>update</Button>

                               </Card.Body>
                           </Card>)
                       } )
                   }
       </div>
        )
    }
}

export default FavRender