import React, { Component } from 'react'
import './index.css'
export default class MatchCard extends Component {
  render() {
    // console.log("recent Match Page",this.props)
    const { competing_team,
      competing_team_logo,
      result,
      match_status
    } = this.props.recentMatchDetails
    return (
      <div className="match-card">
        <img className='competing-team-logo-img' src={competing_team_logo} alt="competing team logo" />
        <p className="competing-team">
          {competing_team}
        </p>
        <p className="result">
          {result}
        </p>
        <p className="match-status" style={{ color: match_status === "Lost" ? "red" : "green" }} >
          {match_status}
        </p>
      </div >
    )
  }
}
