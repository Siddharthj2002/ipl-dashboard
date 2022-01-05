import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';


export const TeamPage = () => {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();
    useEffect(
        () => {
         const fetchTeam = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
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
            <h1>{team.teamName}</h1>
            <MatchDetailCard teamName = {team.teamName} match = {team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSmallCard teamName = {team.teamName} match={match}/>)}
        </div>

    );
}