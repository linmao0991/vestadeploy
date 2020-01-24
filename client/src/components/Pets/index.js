import React, { Component } from "react";
import {Modal} from 'react-bootstrap';
import DeletePet from "../DeletPet";
<<<<<<< HEAD
import {NewPetForm, NewPetTitle } from "../NewPetForm";
=======
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
import API from "../../utils/API"

class Pets extends Component{

    state = {
        modalShow: false,
<<<<<<< HEAD
        modalFunc: undefined,
=======
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
    }

    deletePet = (petId, admin, user) => {
      if(admin === user){
        console.log("All dogs go to heaven " + petId)
        API.removePet(petId)
          .then(response => {
            console.log(response.data);
            this.props.getPetData(this.props.home_id);
          }).catch()
      }
    }

<<<<<<< HEAD
    openModal = (modalFunc) => {
        this.setState({ modalFunc: modalFunc})
=======
    openModal = () => {
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
        this.setState({ modalShow: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalShow: false });
    }
 
    adminFunctionDeletePet = (admin, user) => {
      console.log(this.props)
      if(admin === user){
        return (
          <DeletePet 
            clickFunc = {() => this.deletePet(this.props.pet.id, admin, user)}
<<<<<<< HEAD
          >Remove</DeletePet>
=======
          />
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
          )
      }else{
        return null
      }
    }

<<<<<<< HEAD
    modalTitleSwitch(modalFunc){
      switch (modalFunc) {
        case "pet":
          return(
            <div className="">
                <h2>{this.props.pet.pet_name}<span className="float-right">{this.adminFunctionDeletePet(this.props.home_admin, this.props.user)}</span></h2>
            </div>
          );
        case "newPet":
          return(
            <NewPetTitle/>
          );
      }
    }

    modalBodySwitch(modalFunc){
      switch (modalFunc) {
        case "pet":
          return(
          <div>
            <p>Pet Name: {this.props.pet.pet_name}</p>
            <p>Pet Aage: {this.props.pet.age}</p>
            <hr/>
            <p>Primary Vet: {this.props.pet.primary_vet_info.practice_name}</p>
            <p>Phone Number: {this.props.pet.primary_vet_info.phone_number}</p>
            <p>Address: {this.props.pet.primary_vet_info.street}, {this.props.pet.primary_vet_info.city}, {this.props.pet.primary_vet_info.state} {this.props.pet.primary_vet_info.zip}</p>
            <hr/>
            <p className="card-text">Pets description</p>
          </div>
          );
        case "newPet":
          return(
            <NewPetForm 
              handleInputChange = {this.handleInputChange}
            />
          );
      }
    }

=======
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
    render() {
      return (
        <div className="col-sm-3">
          <div className="card">
            <img src={'https://i.pinimg.com/originals/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg'} className="card-img-top img-responsive" alt="Cute Puppy" />
            <div className="card-body">
              <h5 className="card-title">{this.props.pet.pet_name}</h5>
              <p className="card-text">Age:{this.props.pet.age}</p>
<<<<<<< HEAD
              <button onClick={()=> this.openModal("pet")} className="btn btn-primary">More information</button>
=======
              <button onClick={this.openModal} className="btn btn-primary">More information</button>
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
            </div>
          </div>
          <Modal show={this.state.modalShow} onHide={this.closeModal} backdrop='static'>
            <Modal.Title>
<<<<<<< HEAD
                {this.modalTitleSwitch(this.state.modalFunc)}
            </Modal.Title>
            <Modal.Body>
                {this.modalBodySwitch(this.state.modalFunc)}
=======
                <div className="">
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.pet.pet_name} <span className="float-right">{this.adminFunctionDeletePet(this.props.home_admin, this.props.user)}</span></h2>
                </div>
            </Modal.Title>
            <Modal.Body>
              <div>
                <p>Pet Name: {this.props.pet.pet_name}</p>
                <p>Pet Aage: {this.props.pet.age}</p>
                <hr/>
                <p>Primary Vet: {this.props.pet.primary_vet_info.practice_name}</p>
                <p>Phone Number: {this.props.pet.primary_vet_info.phone_number}</p>
                <p>Address: {this.props.pet.primary_vet_info.street}, {this.props.pet.primary_vet_info.city}, {this.props.pet.primary_vet_info.state} {this.props.pet.primary_vet_info.zip}</p>
                <hr/>
                <p className="card-text">Pets description</p>
              </div>
>>>>>>> 4891c9e633c356ffd51dba06af6d311b06610975
            </Modal.Body>
            <Modal.Footer>
              <div>
                <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      )};
}

export default Pets