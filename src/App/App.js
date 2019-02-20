import React from 'react'
import { List, Form, LandingPage, HomePage } from './components/index.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div className={"App"}>
      <Route exact path="/" component={LandingPage} />
      <Route exact path='/home' component={HomePage} />
    </div>
  </Router>
)

{/* <div className="row mt-5">
<div className="col-md-4 offset-md-1">
  <h2>Articles</h2>
  <List />
</div>
<div className="col-md-4 offset-md-1">
  <h2>Add a new article</h2>
  <Form />
</div>
</div> */}

export default App;