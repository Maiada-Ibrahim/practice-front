import React from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import CardRende from './compo/CardRende';
import { Card, Button, Form } from 'react-bootstrap'
import MyFav from './compo/MyFav';
const axios = require('axios')



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      alldata: [],
      showcard: false,
      showprofile:false,
      userfavdata:[]

    };
  }
  // componentDidMount = async () => {
  //   const { user } = this.props.auth0;

  //   await this.setState({
  //   email: `${user.email}`
  //   })
  // }
  componentDidMount() {
    const { user } = this.props.auth0;

    this.setState({
      email: `${user.email}`
    })

  }
  getalldata = async (event) => {
    event.preventDefault();
    let search = event.target.cardread.value
    console.log(search)

    let url = `http://localhost:3001/getalldata?search=${search}&email=${this.state.email}`;
    let data = await axios.get(url);
    await this.setState({
      alldata: data.data,
 showcard: true,
    })
    console.log(this.state.alldata)
    
  }
  //---------------------------------------------------------------------------------add
  adduserdata=async(element)=>{
// event.preventDefault();
let photoinf={
title:element.title,
thumb:element.thumb,
alt_description:element.alt_description,
email :this.state.email
}

let data= await axios.post(`http://localhost:3001/adduserdata`,photoinf)
console.log(data.data)

this.setState({
  userfavdata: data.data
})
console.log(this.state.userfavdata)

}
//---------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Form onSubmit={this.getalldata}     >
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>photo search</Form.Label>
            <Form.Control type="tex" placeholder="photo need to search" name="cardread" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            search
          </Button>

        </Form>
        {this.state.showcard &&
          <CardRende
            let alldata={this.state.alldata}
            let adduserdata={this.adduserdata} 
            
          />}
          {this.state.showprofile && 
          <MyFav
         
          let userfavdata={this.state.userfavdata} 
          let email={this.state.email} 

          />
          }

      </div>
    )

  }
}

export default withAuth0(BestBooks)
// export default BestBooks