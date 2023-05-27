import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Fragment, useEffect} from 'react';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => { 
  
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <section className="container">
          <Alert /> {/* Place the Alert component here */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
 
