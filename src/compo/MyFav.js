import axios from 'axios'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import FavRender from './FavRender';
import ModelUpdate from './ModelUpdate';


class MyFav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      email: '',
      showmodal:false,
      objinf:[],
      secectedid:0

    };
  }


  handleClose = () => {
    this.setState({
      showmodal: false
    })
  }
  handleShow = () => {
    this.setState({
      showmodal: true
    })
  };
//---------------------------------------------------------------------------------------------------------
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    await this.setState({
      email: `${user.email}`
    })
    console.log(this.state.email)
    let data = await axios.get(`http://localhost:3001/getuserdata?email=${this.state.email}`);
    this.setState({
      data: data.data
    })
    console.log(data.data)
  }
  delete = async (id) => {
    let data = await axios.delete(`http://localhost:3001/deletedata/${id}?email=${this.state.email}`);
    await this.setState({
      data: data.data
    })
    console.log(data.data)
  }
  //-----------------------------------------------------------------------------------------------
  update = async (inf) => {
    this.handleShow()
     let photoinf={
      title:inf.title,
      thumb:inf.thumb,
      alt_description:inf.alt_description,
      email :this.state.email,
      _id:inf._id
      }
      await this.setState({
        objinf: photoinf,
      })
    let id=this.state.objinf._id
    let data = await axios.put(`http://localhost:3001/update/${id}`,photoinf);
    console.log(data.data)
    await this.setState({
      data: data.data
    })
  }
  render() {
    return (

      <div>
        <FavRender
          let delete={this.delete}
          let data={this.state.data}
          let update={this.update}
        />
        
          < ModelUpdate  
          let showmodal={this.state.showmodal}
          let handleClose ={this.handleClose}
          let objinf={this.state.objinf}
          let update={this.update}
          

        />
          
          


        



      </div>



    )
  }
}

export default withAuth0(MyFav)