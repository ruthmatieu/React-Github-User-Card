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

  
    render() {
        return (
            <div>
                Hello World.
            </div>
        )
    }
}

export default Users;