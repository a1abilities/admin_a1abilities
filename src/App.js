import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


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
const Image = lazy(()=> import('./modules/image'));




function App() {
  return (
      <div className="main-wrapper">
        <div className="app" id="app"> 
          <Router>
            <Suspense fallback={<PageLoader />}>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/editor"  render={props => { return <Editor {...props.location.state} /> }}  />
                <Route exact path="/OurTechnology" component={OurTechnology} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/About" component={About} />
                <Route exact path="/WhyUs" component={WhyUs} />
                <Route exact path="/OurGoals" component={OurGoals} />
                <Route exact path="/OurPartners" component={OurPartners} />
                <Route exact path="/Portfolio" component={Portfolio} />
                
                <Route exact path="/image" component={Image} />     
              </Switch>
            </Suspense>
          </Router>
        </div>
      </div>
  );
}

export default App;