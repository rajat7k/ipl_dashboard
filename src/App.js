import './App.css'
import {BrowserRouter ,Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
const App = () => (
  <BrowserRouter>

    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/team-matches/:teamId' component={TeamMatches}  />
    </Switch>

  </BrowserRouter>
)

export default App
