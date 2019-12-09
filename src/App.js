import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { LandingPageContainer } from '../src/container'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPageContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
