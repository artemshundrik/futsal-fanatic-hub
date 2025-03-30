import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* Інші маршрути */}
      </Switch>
    </Router>
  );
}
