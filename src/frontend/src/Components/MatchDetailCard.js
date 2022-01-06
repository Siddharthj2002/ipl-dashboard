import { React } from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = teamName === match.matchWinner;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isTie = match.result === 'tie' ? true : false;
    var cardColour = isTie ? 'MatchDetailCard tie-card' : isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card';
    var matchResult = "";
    if(isTie) {
        matchResult = "There was a tie between " + match.team1 + " and " + match.team2;   
    } else {
        matchResult = match.matchWinner + " won by " + match.resultMargin + " " + match.result;
    }
  return (
    <div className={cardColour}>
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <p> {matchResult} </p>
        <div className="main-details">
          <h4>Match Date</h4>
          <p>{match.date}</p>
          <h4>Match Venue</h4>
          <p>{match.venue}</p>
          <h4>Match City</h4>
          <p>{match.city}</p>
        </div>
      </div>
      <div className="additional-details-set1">
        <h4>Toss Winner</h4>
        <p>{match.tossWinner}</p>
        <h4>Toss Decision</h4>
        <p>{match.tossDecision}</p>
        <h4>Umpires</h4>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
      <div className="additional-details-set2">
        <h4>Man of the Match</h4>
        <p>{match.playerOfMatch}</p>
        <h4>First Innings</h4>
        <p>{match.team1}</p>
        <h4>Second Innings</h4>
        <p>{match.team2}</p>
      </div>
    </div>
  );
};
