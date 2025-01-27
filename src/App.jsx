 /* app.jsx - Osman Erdem Vural - Student ID 301399745 - 23/01/2025 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
import { Divider } from '@mui/material';
const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;
