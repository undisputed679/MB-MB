import './App.css';
import { Homepage } from './pages/homepage/HomepageComponent';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPages from './pages/shop/ShopPages';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPages}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
