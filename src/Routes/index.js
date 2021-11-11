import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"
import Home from "../Views/Home/Home"
import Error404 from "../Views/Error404/Error404"
import ProductPage from "../Views/ProductPage/ProductPage"
import Login from "../Views/Login/Login"
import SignUp from "../Views/SignUp/SignUp"
import Test from "../Views/Test/Test"
import NewProduct from "../Views/NewProduct/NewProduct";
import Cart from "../Views/Cart/Cart"

const Routes=()=>{


    const Logout = ()=>{
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("role")
        window.localStorage.removeItem("car")
        return <Redirect to="/" />
    }

    return(
        <>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Navbar/>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/signup" exact>
                    <SignUp/>
                </Route>
                <Route path="/cart" exact>
                    <Navbar/>
                    <Cart/>
                </Route>
                <Route path="/product/:id" exact>
                    <Navbar/>
                    <ProductPage/>
                </Route>
                <Route path="/logout" exact>
                    <Logout/>
                </Route>
                <Route path="/newproduct" exact>
                    <Navbar/>
                    <NewProduct/>
                </Route>
                <Route path="/test" exact>
                    <Test/>
                </Route>
                <Route path="*" >
                    <Navbar/>
                    <Error404/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}

export default Routes;