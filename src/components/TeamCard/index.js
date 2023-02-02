import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class TeamCard extends Component {



  render() {
    const { teamId, teamName, teamImageUrl } = this.props.teamDetails
    console.log(teamId, teamName, teamImageUrl)
    return (
      <Link to={`/team-matches/${teamId}`} className='link-card' >
        <div className="team-card">
          <img className='team-img' src={teamImageUrl} alt={teamName} />
          <p className="team-name">{teamName} </p>
        </div>
      </Link>
    )
  }
}
