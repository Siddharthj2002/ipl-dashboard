import { React } from 'react';
import "./TeamTitle.scss";
import { Link } from 'react-router-dom';

export const TeamTitle = ({ teamName }) => {
    return (
        <div className='TeamTitle'>
            <h1>
                <Link to={`/teams/${teamName}`}>{teamName}</Link>
            </h1>
        </div>
    )
}