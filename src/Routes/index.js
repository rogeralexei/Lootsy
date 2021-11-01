import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"
import Home from "../Views/Home/Home"
import Error404 from "../Views/Error404/Error404"
import ProductPage from "../Views/ProductPage/ProductPage"

const Routes=()=>{
    return(
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="*" component={Error404} />
            </Switch>
        </Router>
        </>
    )
}

export default Routes;