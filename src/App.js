import React, { Component, lazy, Suspense } from 'react';
import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Content   = lazy(() => import('./components/content/content'))

class App extends Component {

  render() {

    return (
      <div className="main-container">
        <header>
          <div className="logo"></div>
          <h1>Recommends</h1>
          <div className="logo2"></div>
          <h1>Muvies</h1>
        </header>
          <hr></hr>
          <Suspense fallback={<div>Loading</div>}>
            <Content  />
          </Suspense>
      </div>
    );
  }
}

export default App;
