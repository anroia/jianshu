import React, {Component}from 'react';
import Header from './common/Header/index';
import store from './store';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import Home from './pages/home';
import Detail from './pages/detail';
import Writer from './pages/writer';
import Login from './pages/login';


class App extends Component{

    render(){
        return  (
            <Provider store={store}>
                <BrowserRouter>
                   <div>
                       <Header/>
                       <Route path='/' exact component={Home}></Route>
                       <Route path='/detail' exact component={Detail}></Route>
                       <Route path='/recomendation' exact component={Writer}></Route>
                       <Route path='/login' exact component={Login}></Route>
                   </div>
                </BrowserRouter>
            </Provider>
            
        )   
    }
}

export default App;