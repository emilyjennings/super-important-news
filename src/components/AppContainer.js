import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import $ from 'jquery'
import comment from './comment.svg';

//loading in the other components
import GetNews from './GetNews'
import NavBar from './NavBar'


class AppContainer extends Component {

//rendering the components. Search was used in GetNews.
  render() {
    return(
      <div>
        <NavBar />
        <GetNews />
      </div>
    )
  }



}

export default AppContainer
