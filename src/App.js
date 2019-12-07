import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router,HashRouter, Switch, Route } from 'react-router-dom';
import Header from './Views/Layouts/Header';
import Footer from './Views/Layouts/Footer';
import Modals from './Views/Layouts/Modals';
import AboutUs from './Views/Pages/AboutUs';
import NotFound from './Views/Pages/NotFound';
import ContactUs from './Views/Pages/ContactUs';

const loading = () => <div class="animated fadeIn pt-3 text-center">Loading...</div>;
//home
const Home = Loadable({
  loader: () => import('./Views/Home/Home'), 
  loading
});
class App extends React.Component {

  render(){ 
  	 const isLogin=(sessionStorage.getItem('jwt'))?true:false;
  return (
    <div className="App main-section" id="top-scroll-head">

    <Header greeting={"THE KING"} />
    {(!isLogin)?
      <Modals /> 
      :''}
      <Router>
       <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/home' component={ Home } />
            <Route exact path='/about-us' component={ AboutUs } />
            <Route exact path='/contact-us' component={ ContactUs } />
            <Route exact path='*' component={ NotFound } />
        </Switch>
       </Router>

      <Footer footer={"Footer Code"}></Footer>

    </div>
  );}
}

export default App;
