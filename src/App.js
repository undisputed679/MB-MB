import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { Homepage } from './pages/homepage/HomepageComponent';
import {BrowserRouter,Switch,Route,Redirect } from 'react-router-dom';
import ShopPages from './pages/shop/ShopPages';
import Header from './components/Header/Header';
import { SignInAndSignUP } from './pages/signpage/SigninAndSignup';
import {auth,createUserProfileDocument} from './firebase/Firebase';
import { selectCurrentUser } from './redux/user/user.selecter';
import { createStructuredSelector } from 'reselect';
import checkOutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   };
  // }

  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          });
         
        
      }
        setCurrentUser(userAuth);
      
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPages}/>
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUP/>)} />
          <Route exact path='/checkout' component={checkOutPage}/>
        </Switch>
        </BrowserRouter>
      </div> 
    );
  }
  
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
