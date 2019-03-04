import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: ""
  }


  render() {
    return (
      <div>
        <h1 class="searchtitle">Search:</h1>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
          {this.state.query}
      </div>
    )
  }

  searchNews = (query = "") => {
    return query
  }

  componentDidMount(){

  }
}

export default Search
