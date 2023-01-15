import {Fragment, useState, useEffect, Component} from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from '../store/users-context'
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
    static contextType = UsersContext;
    //this component should have access to the UsersContext
    //this cannot be used only once

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

    //ways to use context
    // 1. consumber
    // 2. static

    // componentDidMount() {
    //     //fetch only once (maybe from DB)
    //     this.setState({filteredUsers: DUMMY_USERS})
    // }


    componentDidMount() {
        //fetch only once (maybe from DB)
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) {
        // when updates
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                {/*<UsersContext.Consumer>*/}
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)}/>
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers}/>
                </ErrorBoundary>
                {/*</UsersContext.Consumer>*/}
            </Fragment>
        );
    }
}


export default UserFinder;