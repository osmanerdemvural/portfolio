 /* app.jsx - Osman Erdem Vural - Student ID 301399745 - 23/01/2025 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
//import { ThemeProvider } from '@material-ui/styles';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
  <Router>
 
  <MainRouter />
 
  </Router>
 );
};
export default App;
