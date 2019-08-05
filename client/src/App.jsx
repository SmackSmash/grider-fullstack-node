import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './components/header/header.component';
import Landing from './pages/landing/landing.component';
import Dashboard from './pages/dashboard/dashboard.component';
import SurveyNew from './pages/survey-new/survey-new.component';
import { fetchUser } from './actions';
import './App.scss';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <BrowserRouter>
      <div className='app container'>
        <Header />
        <Route path='/' exact component={Landing} />
        <Route path='/surveys' exact component={Dashboard} />
        <Route path='/surveys/new' exact component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default connect(
  null,
  { fetchUser }
)(App);
