import React, { Component } from 'react';
import axios from 'axios';

class Seeder extends Component {
    constructor() {
        super();
        this.state ={
            user_id: '',
            message: '',
            parent_id: '',
            restaurant_id: '',
            username: '',
            imageUrl: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state));
    }

    postData() {
        const payload = {
            username: this.state.user_id,
            message: this.state.message,
            parent_id: this.state.parent_id,
            restaurant_id: this.state.restaurant_id
        }
        axios.post('/api/questions', payload)
          .then(data => {
              console.log('Successfully posted data to the server', data);
          })
          .catch(err => {
              console.log('Error posting data to the server...', err);
          })
    }

    addUser() {
        const payload = {
            username: this.state.username,
            imageUrl: this.state.imageUrl
        }
        axios.post('/api/users', payload)
          .then(data => {
              console.log('Successfully Added a user to the datbase...', data);
          })
          .catch(err => {
              console.log('Error in adding a user to the database...', err);
          })
    }


    render() {
        return(
            <div>
                UserId: <input name="user_id" onChange={(e) => this.onChangeHandler(e)} />
                Message: <input name="message" onChange={(e) => this.onChangeHandler(e)} />
                ParentID: <input name="parent_id" onChange={(e) => this.onChangeHandler(e)} />
                RestaurantID: <input name="restaurant_id" onChange={(e) => this.onChangeHandler(e)} />
                <button onClick={() => this.postData()}>Submit</button>
                Add User <br/>
                Username: <input name="username" onChange={(e) => this.onChangeHandler(e)} />
                ImageUrl: <input name="imageUrl" onChange={(e) => this.onChangeHandler(e)} />
                <button onClick={() => this.addUser()}>Add User</button>
            </div>
        )
    }
}

export default Seeder;