import React, { Component } from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {
      competing_team,
      competing_team_logo,
      date,
      first_innings,
      man_of_the_match,
      result,
      second_innings,
      umpires,
      venue
    } = this.props.latestMatchDetails

    return (
      <div className="latest-match-card-container">

        <div className="competing-team-detail-box">
          <p className="competing-team-name">{competing_team} </p>
          <p className="match-date">
            {date}
          </p>
          <p className="venue-detail">
            {venue}
          </p>
          <p className="match-status">
            {result}
          </p>
        </div>

        <div className="competing-team-box">
          <img src={competing_team_logo} alt="competing team logo" className="competing-team-logo" />
        </div>

        <div className="match-status-detail">
          <h4 className="first-inning-heading">
            First innings
          </h4>
          <p className="first-inning">
            {first_innings}
          </p>
          <h4 className="second-inning-heading">
            Second innings
          </h4>
          <p className="second-inning">
            {second_innings}
          </p>

          <h4 className="man-of-the-match-heading">
            Man of the match
          </h4>
          <p className="man-of-the-match">
            {man_of_the_match}
          </p>

          <h4 className="umpire-name">
            Umpires
          </h4>
          <p className="umpire">
            {umpires}
          </p>

        </div>

      </div>
    )
  }
}
