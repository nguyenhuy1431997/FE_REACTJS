import React, {Component} from 'react';
import './App.css';
import {withRouter, Route} from "react-router-dom";
import Admin from './component/Admin';
import * as actions from './actions/auth';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.register("dfsdf", "sdfsdf")
    }

    render() {
        const {auth} = this.props;
        console.log(auth);
        return (
            <div className="App">
                <Route path="/admin" exact render={() =>
                    <Admin

                    />}
                />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: async (user, pass) => {
            await dispatch(actions.register(user, pass));
        },
        login: async (user, pass) => {
            await dispatch(actions.login(user, pass));
        },
        logOut: async (value, username, password) => {
            await dispatch(actions.logOut(value, username, password));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
