import React, { Component } from 'react';
import {PostData} from "./PostData"



class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    } 

    login() {
        PostData('login', this.state).then((result) =>  {
            let responseJSON = result;
            console.log(responseJSON)
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }


    render() {
        return (
            <div className="container">
                <h1>Please Log In</h1>
                <div className="d-block">
                    <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
                </div>
                <div className="d-block">
                    <input type="text" name="password" placeholder="password" onChange={this.onChange}/>
                    </div>
                <div className="d-block">
                    <input type="submit" value="login" className="btn btn-primary" onClick={this.login}/>             
                </div>
            </div>
        );
    }
}

export default Login;