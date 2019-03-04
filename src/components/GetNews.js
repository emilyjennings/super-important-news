import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import $ from 'jquery'
import comment from './comment.svg';

//This includes what I would later like to refactor into being a card component


class GetNews extends Component {

  state = {
    items: []
  }

  render() {
    return(
      <div>

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



  //Worked on the search item last - decided to make an if statement that checks if the form target value exists yet to then narrow the search

  fetchNews = () => {
    $.ajax({
      url: 'https://node-hnapi.herokuapp.com/news?title'
    }).done(function(json){
    }).then(json => {
      this.setState({ items: json.map( item => item) })
    })
  }

  componentDidMount() {
    this.fetchNews()
  }
}

export default GetNews
