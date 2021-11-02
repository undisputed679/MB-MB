import './App.css';
import { Homepage } from './pages/homepage/HomepageComponent';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPages from './pages/shop/ShopPages';
import Header from './components/Header/Header';
import { SignInAndSignUP } from './pages/signpage/SigninAndSignup';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPages}/>
        <Route exact path='/signin' component={SignInAndSignUP}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
