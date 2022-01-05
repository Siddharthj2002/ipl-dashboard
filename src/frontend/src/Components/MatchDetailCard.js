import { React } from "react";
import { Link } from "react-router-dom";

import "./MatchDetailCard.scss";

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = teamName === match.matchWinner;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div className={isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <p>
          {match.matchWinner} won by {match.resultMargin} {match.result}
        </p>
        <div className="main-details">
          <h3>Match Date</h3>
          <p>{match.date}</p>
          <h3>Match Venue</h3>
          <p>{match.venue}</p>
          <h3>Match City</h3>
          <p>{match.city}</p>
        </div>
      </div>
      <div className="additional-details-set1">
        <h3>Toss Winner</h3>
        <p>{match.tossWinner}</p>
        <h3>Toss Decision</h3>
        <p>{match.tossDecision}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
      <div className="additional-details-set2">
        <h3>Man of the Match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.team2}</p>
      </div>
    </div>
  );
};
