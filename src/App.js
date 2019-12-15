import React from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Firms from './components/firmsList';
import "bootswatch/dist/sandstone/bootstrap.min.css";
import './App.css';

function App() {
      return (
          <div>  
              <div className="container">
                <Header /> 
                <Firms />
                <Footer />
              </div>
          </div>
      );
    }
export default App;
