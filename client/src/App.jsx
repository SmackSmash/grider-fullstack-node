import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './components/header/header.component';
import Landing from './pages/landing/landing.component';
import Dashboard from './pages/dashboard/dashboard.component';
import SurveyNew from './pages/survey-new/survey-new.component';
import './App.scss';

const App = props => {
  return (
    <BrowserRouter>
      <div className='app container'>
        <Header />
        <Route path='/' exact component={Landing} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/survey-new' exact component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
