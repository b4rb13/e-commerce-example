import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {auth} from "./firebase/firabase.utils";

function App() {

  const[currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
     const unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log("mount")
    });
    return () => {
      console.log("unmount")
      unsubscribeFormAuth()
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
