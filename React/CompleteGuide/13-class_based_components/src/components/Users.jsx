import {Component, useState} from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {
    constructor() {
        // must call super() to call the constructor of the super class
        super();
        this.state = {
            showUsers: true,
            more: 'Test'
        }
    }

    toggleUsersHandler() {
        this.setState((curState) => {
            return {
                showUsers: !curState.showUsers
            }
        })
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                {/*need to refer that this.toggleUsersHandler refers to the surrounding class*/}
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }

    // const [showUsers, setShowUsers] = useState(true);

    // const toggleUsersHandler = () => {
    //   setShowUsers((curState) => !curState);
    // };
    //
    //


};

export default Users;
