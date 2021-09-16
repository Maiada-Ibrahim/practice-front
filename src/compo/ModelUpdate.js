import React from 'react'
import { Modal, Button } from 'react-bootstrap'


class ModelUpdate extends React.Component {
    updatfromform = (e) => {
        e.preventDefault();

        let photoinf = {
            title: e.target.title.value,
            thumb: this.props.objinf.thumb,
            alt_description: e.target.alt_description.value,
            email: this.props.email,
            _id:this.props.objinf.id
            
        }
        
        this.props.update(photoinf)
    }
    render() {
        return (
            <div>
                <Modal show={this.props.showmodal} onHide={this.props.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.updatfromform}>
                            <input type="text" name="title" placeholder={this.props.objinf.title} /><br />
                            <input type="text" name="alt_description" placeholder={this.props.objinf.alt_description} />
                            <input type="image" name="thumb" src={this.props.objinf.thumb} value={this.props.objinf.thumb} />
                            <input type="submit" value="update" />

                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ModelUpdate