import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import {APP_TOKEN} from  './api/config/Constants.js'
import PageLoader from './common/PageLoader';

const WhyUs = lazy(()=> import('./modules/WhyUs'));
const About = lazy(()=> import('./modules/AboutCompany'));
const Contact = lazy(()=> import('./modules/ContactUs'));
const OurGoals = lazy(()=> import('./modules/OurGoals'));
const OurPartners = lazy(()=> import('./modules/OurPartners'));
const Portfolio = lazy(()=> import('./modules/Portfolio'));
const Login = lazy(()=> import('./modules/login'));
const Index = lazy(()=> import('./modules/index'));
const Services = lazy(()=> import('./modules/Services'));
const OurTechnology = lazy(()=> import('./modules/OurTechnology'));
const Editor = lazy(()=> import('./modules/editor'));

const Introduction = lazy(()=> import('./modules/Introduction'));
const Aboutgc = lazy(()=> import('./modules/Aboutgc'));
const DimpleAnil = lazy(()=> import('./modules/DimpleAnil'));




function App() {
 
  return (
      <div className="main-wrapper">
        <div className="app" id="app"> 
          <Router>
            <Suspense fallback={<PageLoader />}>
              <Switch>
                {/* <Route exact path="/" component={Index} />
                <Route exact path="/editor"  render={props => { return <Editor {...props.location.state} /> }}  />
                <Route exact path="/OurTechnology" component={OurTechnology} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/WhyUs" component={WhyUs} />
                <Route exact path="/OurGoals" component={OurGoals} />
                <Route exact path="/OurPartners" component={OurPartners} />
                <Route exact path="/Portfolio" component={Portfolio} />                
                <Route exact path="/login" render={props => { return <Login {...props} /> }}   />      */}

                <Route exact path="/" render={() => <Redirect to="/login" /> } />
                <Route exact path="/home" render={props => { return APP_TOKEN.notEmpty ? <Index {...props}/> :  <Redirect to="/login" /> }} />
                <Route exact path="/editor"  render={props => { return APP_TOKEN.notEmpty ? <Editor {...props}  />  :  <Redirect to="/login" />  }}  />
                <Route exact path="/OurTechnology" render={props => { return APP_TOKEN.notEmpty ? <OurTechnology  {...props}/>  :  <Redirect to="/login" />  }} />
                <Route exact path="/Services" render={props => { return APP_TOKEN.notEmpty ? <Services {...props}/>  :  <Redirect to="/login" />  }} />
                <Route exact path="/Contact" render={props => { return APP_TOKEN.notEmpty ? <Contact {...props} />  :  <Redirect to="/login" />  }} />
                <Route exact path="/About" render={props => { return APP_TOKEN.notEmpty ? <About  {...props}/>  :  <Redirect to="/login" />  }} />
                <Route exact path="/WhyUs" render={props => { return APP_TOKEN.notEmpty ? <WhyUs  {...props}/>  :  <Redirect to="/login" />  }}  />
                <Route exact path="/OurGoals" render={props => { return APP_TOKEN.notEmpty ? <OurGoals  {...props}/>  :  <Redirect to="/login" />  }} />
                <Route exact path="/OurPartners" render={props => { return APP_TOKEN.notEmpty ? <OurPartners {...props} />  :  <Redirect to="/login" />  }} />
                <Route exact path="/Portfolio" render={props => { return APP_TOKEN.notEmpty ? <Portfolio {...props} />  :  <Redirect to="/login" />  }} />                
                <Route exact path="/login" render={props => { return APP_TOKEN.notEmpty ? <Redirect to="/home" /> :  <Login {...props} /> }}  />     
             
                <Route exact path="/Introduction" render={props => { return APP_TOKEN.notEmpty ? <Introduction {...props} />  :  <Redirect to="/login" />  }} />                
                {/* <Route exact path="/Aboutgc" render={props => { return APP_TOKEN.notEmpty ? <Redirect to="/home" /> :  <Login {...props} /> }}  />      */}
                <Route exact path="/DimpleAnil" render={props => { return APP_TOKEN.notEmpty ? <DimpleAnil {...props} />  :  <Redirect to="/login" />  }} />                
              
                <Route exact path="/Aboutgc" render={props => { return APP_TOKEN.notEmpty ? <Aboutgc {...props} />  :  <Redirect to="/login" />  }} />                
             
             
              </Switch>
            </Suspense>
          </Router>
        </div>
      </div>
  );
}

export default App;