import './App.scss';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/teams/:teamName" element = {<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element = {<MatchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
