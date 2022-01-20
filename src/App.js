import React from 'react';
import './App.css';
import { Homepage } from './pages/homepage/HomepageComponent';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPages from './pages/shop/ShopPages';
import Header from './components/Header/Header';
import { SignInAndSignUP } from './pages/signpage/SigninAndSignup';
import {auth} from './firebase/Firebase'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPages}/>
          <Route exact path='/signin' component={SignInAndSignUP}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
