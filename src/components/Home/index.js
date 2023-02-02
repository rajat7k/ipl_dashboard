import React, { Component } from 'react'
import TeamCard from '../TeamCard';
import './index.css'

export default class Home extends Component {

  state = { teamsData: [] }

  componentDidMount() {
    this.getTeamsdata();
  }


  getTeamsdata = async () => {

    const url = "https://apis.ccbp.in/ipl";

    try {

      const teamDataFetch = await fetch(url, {
        method: "GET",
      }).catch((err) => {
        console.log("Error in fetching the api", err)
      }).then((response) => response.json())

      const formatedData = teamDataFetch.teams.map(item => (
        {
          teamId: item.id,
          teamName: item.name,
          teamImageUrl: item.team_image_url,
        }
      ))

      this.setState({ teamsData: formatedData });


    }
    catch (error) {
      console.log(error);
    }

  }


  render() {
    return (
      <div className='home-page'  >

        <div className="heading-box">
          <img className='ipl-logo' src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png " alt="ipl logo" />
          <p className="heading-para">
            IPL Dashboard
          </p>
        </div>

        <div className="team-card-container">

          {this.state.teamsData.map(item => {
            return <TeamCard teamDetails={item} />;
          })}

        </div>

      </div>
    )
  }
}
