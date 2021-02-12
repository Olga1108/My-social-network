import React from 'react';
import Layout from './containers/Layout';
import GlobalStyle from './GlobalStyle';
import Application from './containers/Application';
import './App.css';



const App = () => {

  return (
    <div className="wrapper">
      <Layout>
          <GlobalStyle/>
              <Application />
          </Layout>
    </div>
  );
}

export default App;