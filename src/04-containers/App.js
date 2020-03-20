import React, {Component} from 'react';
import './App.css';
import RouterApp from "../09-routers/renderRoutes";
import NavBar from "../03-components/nav_bar/navBarHeader"

class App extends Component {

    render() {
        return (
            <>
                <NavBar/>
                <RouterApp/>
            </>
        );
    }

}
export default App;
