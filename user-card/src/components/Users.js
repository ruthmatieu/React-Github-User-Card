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
    };

    changeHandler = e => {
        //when user types into input, update state to entered value
        this.setState({
            username: e.target.value
        });
    };

    fetchUser = e => {
        e.preventDefault();
        //create new API call to fetch info for that specific user
        axios   
            .get(`https://api.github.com/users/${this.state.username}`)
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch()
    }

    render() {
        return (
            <div>
                <h1>Search for a GitHub User</h1>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.changeHandler}
                />
                <button onClick={this.fetchUser}>Search</button>
                <div>
                    {/* map over and display the user here */}
                    {/* {this.state.users.map(item => (
                        <h2>{item.name}</h2>
                    ))} */}

                    <h2>{this.state.users.name}</h2>
                    <img width="200" src={this.state.users.avatar_url}/>
                    <h3>{this.state.users.company}</h3>
                    <h4>{this.state.users.location}</h4>
                    <a href={this.state.users.blog} target="_blank">View My Portfolio</a>
                    <p>{this.state.users.bio}</p>
                </div>
            </div>
        )
    }
}

export default Users;