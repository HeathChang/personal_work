import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
  
    componentDidMount() {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
                clientId: '634269985208-a75krn1rfsr662eviecgogobvsv0fn8r.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                //getting a ref from auth instance
                this.setState({isSignedIn: this.auth.isSignedIn.get()})

            })
        })
        //load -> callBack && scope
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dnt knw if we are signed in</div>
        } else if(this.state.isSignedIn){
            return <div>I am Signed in</div>
        } else{
            return <div> I am not Signed In </div>
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth