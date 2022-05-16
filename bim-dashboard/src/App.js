import React, { Component } from "react"
import { BrowserRouter , Switch, Redirect , Route,} from "react-router-dom"
import { isAuthenticated } from "./utils/isAuthenticated"

import { setCurrentUser } from "./store/auth/login/actions"
import  store  from "./store"
// Import Routes

function App() {
  return (
    <BrowserRouter>
    <React.Fragment> 

        <Switch>
          <Route exact path="/login" component={Login} />
          
          <div>
          <Header />
          
          <Route exact  path="/porfileUser" component={porfileUser } />
          <Route  exact path="/ecommerce-products" component={EcommerceProducts } />
          <Route exact  path="/" component={Home } />
          
          <Footer />
          </div>

        </Switch>   
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
