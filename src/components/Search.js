import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()

  }

  render() {
    return (
      <div>
        <h1 class="searchtitle">Search:</h1>
        <form onSubmit={this.handleSubmit} IdName="searchform">
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>

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
