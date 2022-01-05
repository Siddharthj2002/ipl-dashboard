import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../Components/MatchDetailCard';

export const MatchPage = () => {

    const [Matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
        () => {
         const fetchTeam = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
         };
         fetchTeam();
        }, []
    );

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {Matches.map(match => <MatchDetailCard teamName = "Delhi Capitals" match = {match}/>)}
        </div>

    );
}