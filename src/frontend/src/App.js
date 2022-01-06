import './App.scss';
import  {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element = {<HomePage />} />
          <Route exact path="/teams/:teamName" element = {<TeamPage />} />
          <Route exact path="/teams/:teamName/matches/:year" element = {<MatchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
