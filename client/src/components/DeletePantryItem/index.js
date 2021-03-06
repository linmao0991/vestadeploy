import React, { Component } from 'react';
import Select from 'react-select';
import API from '../../utils/API';

export class DeletePantryItem extends Component {
    state = {
        item_id: undefined
    }

    // Handles dropdown selector
    handleChange = selection => this.setState({ item_id: selection.value })

    // Post call to API for deleting 
    deleteItem = () => {
        console.log(this.state.item_id)
        API.deletePantryItem({
            item_id: this.state.item_id
        })
            .then(res => {
                console.log(res)
                this.props.listPantry(this.props.home_id)
                this.props.closeModal()
            })
            .catch(err => {
                console.log(err)
            })
    }

    buildOptions = () => {
        const itemOptions = this.props.pantry.map(item => ({ value: item.id, label: item.item_name }))

        return itemOptions;
    }
    render() {
        return (
            <div>
                <Select
                    value={this.item_id}
                    onChange={this.handleChange}
                    options={this.buildOptions()}
                />
                <button disabled={!this.state.item_id} type='button' className='btn btn-danger' onClick={this.deleteItem}>Delete</button>
            </div>
        )
    }
}

export function DeletePantryItemTitle() {
    return (
        <div>
            <h2>Delete an item</h2>
        </div>
    )
}