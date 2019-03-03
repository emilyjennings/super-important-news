import React, { Component } from 'react'
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
            <div className="title">{item.title}</div>
            <div className="points">{item.points} Points</div>
            <div className="user">by {item.user}</div>
            <div className="time_ago">{item.time_ago} ago</div>
            <div className="comments">comments: {item.comments_count}</div>
          </div>
        )}

      </div>
    )
  }


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
