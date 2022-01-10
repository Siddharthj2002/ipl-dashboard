import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss';

export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();

    useEffect(
        () => {
         const fetchTeam = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
            const data = await response.json();
            setTeam(data);
         };
         fetchTeam();
        }, [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }

    return (
        <div className="TeamPage">
            <div className='team-name-section'>
                <h1 className='team-name'>{team.teamName}</h1>
            </div>
            <div className='home-page'>
                <Link to={`/`}>Home</Link>
            </div>
            <div className='match-detail-section'>
                <h2>Latest Match</h2>
                <MatchDetailCard teamName = {team.teamName} match = {team.matches[0]}/>
            </div>
            <div className='win-loss-section'>
                Wins / Losses
                <PieChart data={[
                    { title: 'Losses', value:  team.totalMatches - team.totalWins, color: '#bd314b' },
                    { title: 'Wins', value: team.totalWins, color: '#29a763' },
                ]}/>
            </div>
                {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName = {team.teamName} match={match}/>)}
            <div className='more-link'>
                <Link to={`/teams/${teamName}/matches/${team.matches[0].date.slice(0,4)}`}>More &gt;</Link>
            </div>
        </div>
    );
}