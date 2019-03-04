import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import $ from 'jquery'
import comment from './comment.svg';

import Search from './Search'

//This includes what I would later like to refactor into being a card component


class GetNews extends Component {

  state = {
    items: []
  }

  render() {
    return(
      <div>
        <Search fetchNews={this.fetchNews} />

        {this.state.items.map(item =>
          <a href={item.url}>
          <div className="cardborder">
            <div className="leftbox">
              <div className="itemtitle">{item.title}</div>
              <div className="url">{item.domain}</div>
              <div className="points">{item.points} Points</div>
              <div className="user_time">by <span className="user">{item.user}</span> <span idName="time_ago">{item.time_ago}</span></div>
            </div>
            <div className="commentbox">
              <a href={"https://news.ycombinator.com/item?id=" + item.id}>
              <img src={comment} className="commentimg" alt="comment" />
              <div className="comments">{item.comments_count}</div>
              </a>
            </div>
          </div>
          </a>
        )}

      </div>
    )
  }



  //I worked on the search item last - decided to make an if statement that checks if the form target value exists yet to then narrow the search

  //I worked on this for hours and never got to the point I could narrow trhe search - mainlyt because I need a bit more practice with React state and forms.
  //I will continue to work on it after this assignment is turned in. This needs to work!
  fetchNews = (query = "") => {

      $.ajax({
          url: `http://hn.algolia.com/api/v1/search?query=${query}`
        }).then(json => {
          this.setState({ items: json.hits.map( item => item) })
        })

    }


  componentDidMount() {
    this.fetchNews()
  }

}

export default GetNews
