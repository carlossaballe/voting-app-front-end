import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/HeaderAppBar';
import CandidateList from './components/CandidateList';

function App() {
  return (
    <Fragment>
      <ButtonAppBar/>
      <CandidateList/>
    </Fragment>
  );
}

export default App;
