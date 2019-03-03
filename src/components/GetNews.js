import React, { Component } from 'react'
import $ from 'jquery'



class GetNews extends Component {

  state = {
    items: []
  }

  render() {
    return(
      <div>
        <h1>News:</h1>
        {this.state.items.map(item =>
          <div className="cardborder">
            <h2>{item.title}</h2>
            <p>{item.points}</p>
            <p>by {item.user}</p>
            <p>{item.time_ago} ago</p>
            <p>comments: {item.comments_count}</p>
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
