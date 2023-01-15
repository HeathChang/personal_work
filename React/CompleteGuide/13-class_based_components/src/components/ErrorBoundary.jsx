import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidMount(error) {
        this.setState({hasError: true});
    }
    render(){
        if(this.state.hasError){
            return <p> sth went wrong ! </p>
        }
        return this.props.children
    }
}

export default ErrorBoundary;