import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import $ from 'jquery'

//This includes what I would later like to refactor into being a car component


class GetNews extends Component {

  state = {
    items: []
  }

  render() {
    return(
      <div>

        {this.state.items.map(item =>
          <div className="cardborder">
            <div className="leftbox">
              <div className="itemtitle">{item.title}</div>
              <div className="url">{item.domain}</div>
              <div className="points">{item.points} Points</div>
              <div className="user_time">by <span className="user">{item.user}</span> <span idName="time_ago">{item.time_ago}</span></div>
            </div>
            <ReactSVG src="comment.svg" />
            <div className="commentbox">
              <div className="comments">comments: {item.comments_count}</div>
            </div>
          </div>
        )}

      </div>
    )
  }

  //Couldn't seem to make this work but with more time I would have researched some more on React documentation


  //Worked on the search item last - decided to make an if statement that checks if the form target value exists yet to then narrow the search

  componentDidMount() {


    $.ajax({
      url: 'https://node-hnapi.herokuapp.com/news?title'
    }).done(function(json){
    }).then(json => {
      this.setState({ items: json.map( item => item) })
    })
  }
}

export default GetNews
