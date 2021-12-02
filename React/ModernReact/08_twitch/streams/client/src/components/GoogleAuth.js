import React from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/index'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '634269985208-a75krn1rfsr662eviecgogobvsv0fn8r.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                console.log("auth instance: ", this.auth);
                //getting a ref from auth instance

                //this.onAuthChange();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })

                this.auth.isSignedIn.listen(this.onAuthChange);
                //listen() will be invoked any time the user's authentication status change. -> setState해줌
            })
        })
        //load -> callBack && scope
    }
    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        if (isSignedIn) {
            this.props.signIn()
        } else {
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign-Out
                </button>
            )
        } else {
            return (
                //if we put parenthesis (""), event will called  the instant the component rendered.
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign-In
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
    //gapi.auth2.getAuthInstance().signIn()로 사용 가능
}

export default connect(null, { signIn, signOut })(GoogleAuth)