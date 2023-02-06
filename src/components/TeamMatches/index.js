import React, { Component } from 'react'
import LatestMatch from '../LatestMatch';
import MatchCard from '../MatchCard';
import './index.css'

export default class TeamMatches extends Component {

  state = { teamMatchesDetails: { teamBannerUrl: "", recentMatches: "", latestMatchDetails: "" } }


  componentDidMount() {
    this.getFullDetails()
  }

  getFullDetails = async () => {

    const url = "https://apis.ccbp.in/ipl/" + this.props.match.params.teamId;

    try {

      const teamFullDetailFetch = await fetch(url, {
        method: "GET",
      }).catch((err) => {
        console.log("Error while fetching api " + err);
      }).then((response) => response.json())

      const filterData = {
        teamBannerUrl: teamFullDetailFetch.team_banner_url,
        recentMatches: teamFullDetailFetch.recent_matches,
        latestMatchDetails: teamFullDetailFetch.latest_match_details,
      }
      this.setState({ teamMatchesDetails: filterData });
    }
    catch (err) {
      console.log(err);
    }

  }

  render() {
    return (
      <div className="team-matches-page">
        <img src={this.state.teamMatchesDetails.teamBannerUrl} alt="team banner" className="team-banner" />

        <p className="latest-matches-para">Latest Matches</p>

        <LatestMatch latestMatchDetails={this.state.teamMatchesDetails.latestMatchDetails} />

        <div className="match-card-container">

          {Object.values(this.state.teamMatchesDetails.recentMatches).map((item) => {
            return <MatchCard key={item.id} recentMatchDetails={item} />
          })}

        </div>


      </div>
    )
  }
}
