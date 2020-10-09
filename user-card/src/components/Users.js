import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

    constructor() {
        super();

        this.state = {
            users: [],
            username: ''
        }
    }

    initialUser = 'ruthmatieu';

    componentDidMount() {
        console.log('mounted comp')
        axios
            .get(`https://api.github.com/users/${this.initialUser}`)
            .then(res => {
                console.log(res.data)
                //we're updating users with our data
                this.setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log(`You've gotten this error:`, err)
            })
    }

    componentDidUpdate(){

    }

    render() {
        return (
            <div>
                <h1>Search for a GitHub User</h1>
                <input
                    type="text"
                    value=""
                    onChange=""
                />
                <button>Search</button>
                <div>
                    {/* map over and display the user here */}
                </div>
            </div>
        )
    }
}

export default Users;