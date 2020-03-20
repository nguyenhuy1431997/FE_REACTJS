import React, {Component} from 'react';
import './style.scss';
import {connect} from "react-redux";
import * as actions from '../../01-actions/auth';
import {ADMIN_EMAIL} from '../../05-utils/constant'
import {getUserInfo} from '../../05-utils/storage'
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';

class NavBarHeader extends Component {

    componentDidMount() {
        const userActive = JSON.parse(getUserInfo());
        console.log(userActive);
    }

    _handleLogout() {
        this.props.actions.logout();
    }

    renderHeaderLogin() {
        return (
            <Nav navbar>
                <Nav className="view-logout" navbar>
                    <NavbarBrand className="/login" href="/login">Login</NavbarBrand>
                </Nav>
            </Nav>
        );
    }

    renderHeaderAdmin() {
        return (
            <Nav navbar>
                <Nav className="view-logout" navbar>
                    <NavbarBrand className="ml-auto" href="/login">
                        <button onClick={() => this._handleLogout()}>Logout</button>
                    </NavbarBrand>
                </Nav>
            </Nav>
        );
    }

    renderHeaderUser() {
        return (
            <Nav navbar>
                <Nav className="view-logout" navbar>
                    <NavbarBrand className="ml-auto" href="/login">
                        <button onClick={() => this._handleLogout()}>Logout</button>
                    </NavbarBrand>
                </Nav>
            </Nav>
        );
    }

    render() {
        let userActive = this.props.userActive;
        let isAdminUser = userActive && userActive.email && userActive.email === ADMIN_EMAIL;
        return (
            <div>
                <Navbar color="dark" light expand="md" className="navbar-header">
                    {userActive
                        ?
                        (isAdminUser ? this.renderHeaderAdmin() : this.renderHeaderUser())
                        : this.renderHeaderLogin()
                    }
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userActive: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (user, pass) => {
            dispatch(actions.register(user, pass));
        },
        logout: () => {
            dispatch(actions.logout());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBarHeader);
