
import React from 'react';
import { Modal } from 'react-bootstrap'
import API from '../../utils/API'
import Moment from 'react-moment'

class AdminChoreDisplay extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            points: [],
            modalShow: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalShow: true });
    }

    closeModal() {
        this.setState({ modalShow: false });
    }

    markUncompleted = id => {
        API.markChoreUncomplete({
            id: id
        })
            .then(res => {
                console.log(res)
                this.props.getChores(this.props.home_id)
            })
    }

    deleteChore = id => {
        API.deleteChore({
            chore_id: id
        })
            .then(res => {
                console.log(res)
                this.props.getChores(this.props.home_id)
            })
            .catch(err => {
                console.log(err);
            })
    }

    addPoints = (completedById, points) => {
        const id = completedById
        const users = this.props.users

        const compUser = users.find((user) => {
            if (user.id === id) {
                return user
            }
        })

        const compUserPoints = compUser.points + points

        API.addUserPoints({
            id: id,
            points: compUserPoints
        })
            .then(res => {
                console.log(res)
                this.props.grabUsers(this.props.home_id)
                this.deleteChore(this.props.id)
                this.props.getChores(this.props.home_id)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleClose = () => {
        this.setState({ modalShow: false })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }} >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-success">{this.props.choreName}<br />
                        <button type="button" className="btn btn-secondary completed-btn-group" style={{ margin: 10 }} onClick={this.openModal}>More Info...</button>
                        <button type="button" className="btn btn_yellow completed-btn-group" onClick={() => this.markUncompleted(this.props.id)} >This isn't done</button>
                        <button type="button" className="btn btn-danger completed-btn-group" style={{ margin: 10 }} onClick={() => this.addPoints(this.props.completedById, this.props.pointValue)} >Delete</button>
                    </li>
                </ul>
                <Modal
                    show={this.state.modalShow}
                    onHide={this.closeModal}
                    backdrop='static'
                >
                    <Modal.Header>
                        <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.choreName}</h2>
                        <hr />
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Completed by: {this.props.completedBy}</h3>
                        <hr />
                        <p>Created by: {this.props.createdBy}</p>
                        <p>Assigned to: {this.props.assignedUser}</p>
                        <p>Point value: {this.props.pointValue ? this.props.pointValue : "None"}</p>
                        <p>Time/Date assigned: <Moment format="MM/DD/YYYY LT">{this.props.startDateTime}</Moment></p>
                        <p>Needs done before: <Moment format="MM/DD/YYYY LT">{this.props.endDateTime}</Moment></p>
                        <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}

export default AdminChoreDisplay;