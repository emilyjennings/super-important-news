import React, { Component } from 'react'
import $ from 'jquery'

class GetNews extends Component {

  state = {
    title: []
  }

  render() {
    return(
      <div>
        <h1>News:</h1>
        {this.state.title}
      </div>
    )
  }


  componentDidMount() {

    $.ajax({
      url: 'https://node-hnapi.herokuapp.com/news?title'
    }).done(function(json){
    }).then(json => {
      this.setState({ title: json[0].title })
    })
  }
}

export default GetNews
